import { astToString } from "./astToString.ts";
import { transformAST } from "./transformAST.ts";
import { bidirectionalParsedIdentitiesMap } from "./bidirectionalIdentities.ts";
import { ParsedNode } from "./types.ts";
import mathParser from "npm:math-parser";
import { simplify } from "npm:mathjs";

export function transform(expression: string) {
    const originalAST: ParsedNode = mathParser.parse(simplify(expression).toString());
    
    const transformedAST = transformAST(originalAST, bidirectionalParsedIdentitiesMap);
    
    const expressionFromAST = simplify(astToString(transformedAST)).toString();

    return expressionFromAST;
}
