import mathParser from "npm:math-parser";
import { identities } from "../data/identities.ts";
import { ParsedNode } from "./types.ts";

export const bidirectionalIdentities = getBidirectionalObject(identities);
export const bidirectionalParsedIdentitiesMap = getBidirectionalParsedIdentitiesMap(identities);

function getBidirectionalParsedIdentitiesMap(identities: { [index: string]: string }): Map<string, ParsedNode> {
    const bidirectionalParsedIdentitiesMap = new Map() as Map<string, ParsedNode>;

    Object.entries(identities).forEach(([a, b]) => {
        try {
            const A = mathParser.parse(a);
            const B = mathParser.parse(b);
            bidirectionalParsedIdentitiesMap.set(A, B);
            bidirectionalParsedIdentitiesMap.set(B, A);
        } catch (error) {
            console.error(`Error parsing identity: ${a} = ${b}`, error);
        }
    });

    return bidirectionalParsedIdentitiesMap;
}

function getBidirectionalObject(input: Record<string, string>): Record<string, string> {
    const result: Record<string, string> = {};

    for (const [key, value] of Object.entries(input)) {
        result[key] = value;
        result[value] = key;
    }

    return result;
}