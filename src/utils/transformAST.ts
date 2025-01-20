
/***************************************************
 * Funciones de comparación y transformación
 ***************************************************/

import { ParsedNode } from "./types.ts";

/**
 * Verifica si dos nodos AST son estructuralmente iguales.
 * - Compara tipo, op, name, value, args recursivamente.
 */
function structuresMatch(nodeA: ParsedNode, nodeB: ParsedNode): boolean {
    if (nodeA.type !== nodeB.type) return false;

    if (!compareOperator(nodeA.op, nodeB.op)) return false;

    if (nodeA.name !== nodeB.name) return false;

    if (nodeA.value !== nodeB.value) return false;

    const argsA = nodeA.args || [];
    const argsB = nodeB.args || [];

    if (argsA.length !== argsB.length) return false;

    for (let i = 0; i < argsA.length; i++) {
        if (!structuresMatch(argsA[i], argsB[i])) {
            return false;
        }
    }

    return true;
}

/** Compara los 'operator' de dos nodos, que pueden ser string o ParsedNode. */
function compareOperator(operatorA?: string | ParsedNode, operatorB?: string | ParsedNode): boolean {
    if (!operatorA && !operatorB) return true;

    if (!operatorA || !operatorB) return false;

    if (typeof operatorA === "string" && typeof operatorB === "string") {
        return operatorA === operatorB;
    }

    if (typeof operatorA === "object" && typeof operatorB === "object") {
        return structuresMatch(operatorA as ParsedNode, operatorB as ParsedNode);
    }

    return false;
}

/**
 * Recorre recursivamente el AST y:
 * - Si encuentra un nodo que "matchee" con alguna clave del mapa,
 *   lo reemplaza por el valor correspondiente.
 * - Si no, transforma sus hijos recursivamente.
 */
export function transformAST(node: ParsedNode, map: Map<ParsedNode, ParsedNode>): ParsedNode {
    for (const keyJSON of map.keys()) {
        const keyNode = keyJSON as ParsedNode;
        if (structuresMatch(node, keyNode)) {
            return map.get(keyJSON)!;
        } 
        // what if this were from the ground up, instead of from top to bottom (in terms of scope)
        // or both ways for all levels so the tree is constructed
        // todo: 
        // - group expressions
        // - discard redundant ones such as x / 2 * 2 = x
    }

    if (node.args && node.args.length > 0) {
        const newArgs = node.args.map((child) => transformAST(child, map));
        return { ...node, args: newArgs };
    }

    return node;
}

