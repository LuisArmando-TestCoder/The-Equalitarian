import { simplify, evaluate } from "npm:mathjs";
import mathParser from "npm:math-parser";
import { bidirectionalParsedIdentitiesMap } from "./identities.ts";

console.log(bidirectionalParsedIdentitiesMap)

// if a + b - c == d then g/2 + g/2 + b - c == d
const scope = { x: 17 };
const expression = "cos(x)^2 + sin(x)^2";
const result = evaluate(expression, scope);
const expressions = findNestedParentheses(expression);
const results = expressions.map(expression => evaluate(expression, scope));

const simplified = simplify(expression);

// console.log("simplified", expression, simplified.toString(), mathParser.parse(expression))

// console.log("Main result of ", expression, " => \n", result)

// results.forEach((result, index) => {
//     console.log("result of ", expressions[index], " => \n", result)
// })

// const result2 = extractExpressions(expression);

// console.log(result2);

// try 0
function getNonNestedExpressions(input: string): string[] {
    const matches = input.match(/\([ \+\-\*\/\^0-9a-z]+\)/gi);

    return matches ? matches.map(m => m.trim()) : [];
}

// try 1
function findNestedParentheses(input: string): string[] {
    const matches: string[] = [];
    const pattern = /\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\)/g; // Matches nested parentheses

    let match;
    while ((match = pattern.exec(input)) !== null) {
        matches.push(match[0]);
        const innerMatches = findNestedParentheses(match[0].slice(1, -1)); // Recurse on inner content
        matches.push(...innerMatches);
    }

    return matches;
}

function isOperator(match: string) {
    return "+-*/".includes(match);
}

// try 2
function extractExpressions(input: string): string[] {
    const uniqueExpressions = new Set<string>();

    // Regular expression to match valid mathematical sub-expressions and nested parentheses
    const pattern = /\([^()]*\)|[^\s()]+/g;

    function recursiveExtract(expression: string): void {
        const matches = expression.match(pattern);
        if (matches) {
            matches.forEach((match) => {
                if (!uniqueExpressions.has(match) && !isOperator(match)) {
                    uniqueExpressions.add(match);
                    if (match.startsWith("(") && match.endsWith(")")) {
                        // Recursively extract from nested parentheses
                        recursiveExtract(match.slice(1, -1));
                    }
                }
            });
        }
    }

    recursiveExtract(input);

    // Remove duplicates and return the results as an array
    return Array.from(uniqueExpressions);
}
