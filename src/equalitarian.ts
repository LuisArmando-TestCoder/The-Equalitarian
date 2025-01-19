import { astToString } from "./utils/astToString.ts";
import { transformAST } from "./utils/transformAST.ts";
import { bidirectionalParsedIdentitiesMap } from "./utils/bidirectionalIdentities.ts";
import { ParsedNode } from "./utils/types.ts";
import mathParser from "npm:math-parser";
// import { simplify, evaluate } from "npm:mathjs";

const expression = prompt(`
  Type as: cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2
  
  Or just type a constant like 1
  
  Enter a mathematical expression:`);

// or just try "1" and find out
const originalAST: ParsedNode = mathParser.parse(expression);

// console.log("=== AST Original ===");
// console.log(JSON.stringify(originalAST, null, 2));

const transformedAST = transformAST(originalAST, bidirectionalParsedIdentitiesMap);

// console.log("\n=== AST Transformado ===");
// console.log(JSON.stringify(transformedAST, null, 2));

const expressionFromAST = astToString(transformedAST);

console.log(`
  ${expression}
    
  transforms into

  ${expressionFromAST}

  and back to

  ${
    astToString(transformAST(transformedAST, bidirectionalParsedIdentitiesMap))
  }
`);

/**
 * the following simplify doesn't work, so I better keep working on this,
 * because I need to make THE tree of all possible simplifications (or cyclic transformations)
 *  */ 
// console.log(`expression ${expressionFromAST} simplified is ${simplify(expressionFromAST)}`)