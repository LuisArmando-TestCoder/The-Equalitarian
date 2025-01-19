import { astToString } from "./utils/astToString.ts";
import { transformAST } from "./utils/transformAST.ts";
import { bidirectionalParsedIdentitiesMap } from "./utils/bidirectionalIdentities.ts";
import { ParsedNode } from "./utils/types.ts";
import mathParser from "npm:math-parser";

/***************************************************
 * Ejemplo de uso
 ***************************************************/
const expression = "1";
const originalAST: ParsedNode = mathParser.parse(expression);

// console.log("=== AST Original ===");
// console.log(JSON.stringify(originalAST, null, 2));

const transformedAST = transformAST(originalAST, bidirectionalParsedIdentitiesMap);

console.log("\n=== AST Transformado ===");
// console.log(JSON.stringify(transformedAST, null, 2));
console.log(`${expression} transforms into ${astToString(transformedAST)}`);
