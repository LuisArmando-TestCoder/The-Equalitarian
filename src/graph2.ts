import { create, all, MathNode } from "npm:mathjs";
import { rules } from "./data/indentities_2";

const math = create(all);

// *********************************************
// Define custom functions/constants for tokens
// *********************************************
// These definitions let our preprocessor “map” the Unicode symbols
// into function names that Math.js can parse.
// (In this demo they just return a string representation.)
math.import({
  union: function(a: any, b: any) {
    // Placeholder: In a full implementation, union might return an actual set union.
    return `union(${a},${b})`;
  },
  intersect: function(a: any, b: any) {
    return `intersect(${a},${b})`;
  },
  empty: 0, // For example, define empty as 0 (or a special constant if needed)
  not: function(a: any) { return !a; }
}, { override: true });

// *********************************************
// Preprocessor for rule strings
// *********************************************
// Replace unsupported tokens with Math.js–friendly ones.
// For example, vertical bars for absolute value become abs(…),
// and Unicode symbols (∅, ∪, ∩, ¬) are replaced.
function preprocessRule(ruleStr: string): string {
  // Replace absolute value notation: |...|  → abs(...)
  // (This regex assumes vertical bars always occur in pairs.)
  ruleStr = ruleStr.replace(/\|([^|]+)\|/g, 'abs($1)');
  // Replace the empty-set symbol with the identifier "empty"
  ruleStr = ruleStr.replace(/∅/g, 'empty');
  // Replace union (∪) with a token that Math.js can process.
  // Here we simply insert spaces so that later the custom function “union” will be recognized.
  ruleStr = ruleStr.replace(/∪/g, ' union ');
  // Similarly replace intersection (∩)
  ruleStr = ruleStr.replace(/∩/g, ' intersect ');
  // Replace the logical NOT symbol (¬) with the word "not"
  ruleStr = ruleStr.replace(/¬/g, 'not');
  // (Additional replacements could be added as needed.)
  return ruleStr;
}

// *********************************************
// Utility: Compare nodes (naively using toString)
// *********************************************
function nodesAreEqual(node1: MathNode, node2: MathNode): boolean {
  return node1.toString() === node2.toString();
}

// *********************************************
// Substitute placeholders with their matching subnodes
// *********************************************
// (In this simple demo, the “match” is either found or not. For a more
// advanced system you’d want a pattern-matching algorithm.)
function substitute(node: MathNode, scope: Record<string, MathNode>): MathNode {
  return node.transform((child) => {
    if ("isSymbolNode" in child && child.isSymbolNode && scope[child.name]) {
      return scope[child.name];
    }
    return child;
  });
}

// *********************************************
// Replace a target node in an AST with a replacement node.
// *********************************************
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

// *********************************************
// Generate candidate expressions (one-step simplifications)
// *********************************************
function generateCandidates(expr: string): Set<string> {
  const candidates = new Set<string>();

  // Parse the original expression.
  let originalNode: MathNode;
  try {
    originalNode = math.parse(expr);
  } catch (error) {
    console.error("Error parsing expression:", expr, error);
    return candidates;
  }

  // Collect every node in the AST.
  const nodes: MathNode[] = [];
  originalNode.traverse((node: MathNode) => {
    nodes.push(node);
  });

  // For each node in the expression and each rule,
  // try to apply the rule.
  for (const node of nodes) {
    for (const rule of rules) {
      // Preprocess and parse the pattern (left-hand side of the rule)
      let patternStr = preprocessRule(rule.l);
      let pattern: MathNode;
      try {
        pattern = math.parse(patternStr);
      } catch (error) {
        console.error("Error parsing rule pattern:", rule.l, error);
        continue;
      }
      // Here we use a simple match: if the node’s string equals the pattern’s string.
      // (A more sophisticated matcher would match variables, etc.)
      const matchResult = nodesAreEqual(node, pattern) ? {} : null;
      if (matchResult) {
        // Preprocess and parse the replacement pattern.
        let replacementStr = preprocessRule(rule.r);
        let replacementPattern: MathNode;
        try {
          replacementPattern = math.parse(replacementStr);
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

// *********************************************
// Build the Simplification Graph using BFS.
// *********************************************
interface SimplificationGraph {
  [expression: string]: string[];
}

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

const initialExpression = "(sin(x)^2 + cos(x)^2) + (x + 0) * 1";
const simplificationGraph = generateSimplificationGraph(initialExpression);
console.log("Simplification Graph:");
console.log(JSON.stringify(simplificationGraph, null, 2));