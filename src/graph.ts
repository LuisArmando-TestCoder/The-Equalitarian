// Importing required functions from npm modules.
// We use mathjs for AST manipulation and math-parser for an extra validation step.
import { create, all, MathNode } from "npm:mathjs";
import { parse as parseMathParser } from "npm:math-parser";
import { rules } from "./data/indentities_2";

const math = create(all);

/**
 * substitute
 *
 * Given a mathjs AST node (typically representing the replacement pattern)
 * and a match scope (mapping placeholder names to matched subnodes),
 * recursively replaces any SymbolNode whose name is in the scope with the corresponding node.
 */
function substitute(node: MathNode, scope: Record<string, MathNode>): MathNode {
  return node.transform((child) => {
    // Check if the node is a symbol node and if it matches a key in the scope.
    if ("isSymbolNode" in child && child.isSymbolNode && scope[child.name]) {
      return scope[child.name];
    }
    return child;
  });
}

/**
 * replaceNode
 *
 * Given a mathjs AST "root", replaces the exact target node (by reference)
 * with the provided replacement node and returns the new tree.
 */
function replaceNode(
  root: MathNode,
  target: MathNode,
  replacement: MathNode
): MathNode {
  return root.transform((node) => {
    if (node === target) {
      return replacement;
    }
    return node;
  });
}

/**
 * generateCandidates
 *
 * For a given expression string, this function:
 *  1. Validates the expression using math-parser.
 *  2. Parses the expression into a mathjs AST.
 *  3. Traverses every node in the AST.
 *  4. For each node and each rule, checks if the rule pattern matches.
 *  5. If a rule applies, replaces the node with the simplified version,
 *     then converts the new tree back to a string.
 *
 * Returns a set of candidate expressions that represent one-step simplifications.
 */
function generateCandidates(expr: string): Set<string> {
  const candidates = new Set<string>();

  // Validate the expression with math-parser.
  try {
    parseMathParser(expr);
  } catch (error) {
    console.error("Error in math-parser while parsing:", expr, error);
    return candidates;
  }

  let originalNode: MathNode;
  try {
    originalNode = math.parse(expr);
  } catch (error) {
    console.error("Error parsing expression with mathjs:", expr, error);
    return candidates;
  }

  // Collect all nodes in the AST.
  const nodes: MathNode[] = [];
  originalNode.traverse((node: MathNode) => {
    nodes.push(node);
  });

  // For each node and for each rule, try to apply the rule.
  for (const node of nodes) {
    for (const rule of rules) {
      let pattern: MathNode;
      try {
        pattern = math.parse(rule.l);
      } catch (error) {
        console.error("Error parsing rule pattern:", rule.l, error);
        continue;
      }
      // Try matching the current node against the rule pattern.
      const matchResult = node.match(pattern);
      if (matchResult) {
        // Parse the right-hand side replacement and perform substitution.
        let replacementPattern: MathNode;
        try {
          replacementPattern = math.parse(rule.r);
        } catch (error) {
          console.error("Error parsing rule replacement:", rule.r, error);
          continue;
        }
        const simplifiedNode = substitute(replacementPattern, matchResult);
        if (simplifiedNode.toString() !== node.toString()) {
          // Replace the matched node in the original AST.
          const newTree = replaceNode(originalNode, node, simplifiedNode);
          const newExpr = newTree.toString();
          if (newExpr !== expr) {
            candidates.add(newExpr);
          }
        }
      }
    }
  }
  return candidates;
}

/**
 * SimplificationGraph represents a mapping where:
 *   - Each key is an expression string.
 *   - The value is an array of strings representing the expressions obtained by one simplification step.
 */
interface SimplificationGraph {
  [expression: string]: string[];
}

/**
 * generateSimplificationGraph
 *
 * Given an initial expression string, this function uses a breadth-first search to explore
 * all one-step simplification candidates (using generateCandidates) and builds a graph where:
 *   - Each node is an expression.
 *   - Each directed edge (from parent to child) represents one applied simplification.
 *
 * The function returns the graph as an object mapping expression strings to arrays of child expressions.
 */
function generateSimplificationGraph(initialExpr: string): SimplificationGraph {
  const graph: SimplificationGraph = {};
  const visited = new Set<string>();
  const queue: string[] = [];

  visited.add(initialExpr);
  queue.push(initialExpr);

  while (queue.length > 0) {
    const currentExpr = queue.shift()!;
    const candidates = generateCandidates(currentExpr);
    graph[currentExpr] = [];
    for (const candidate of candidates) {
      graph[currentExpr].push(candidate);
      if (!visited.has(candidate)) {
        visited.add(candidate);
        queue.push(candidate);
      }
    }
  }
  return graph;
}

// -----------------------
// Example Usage
// -----------------------

const expression = "2 * (x + 0)"; // Change this expression as desired.
const simplificationGraph = generateSimplificationGraph(expression);
console.log("Simplification Graph:");
console.log(JSON.stringify(simplificationGraph, null, 2));
