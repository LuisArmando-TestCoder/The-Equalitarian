/***************************************************
 * Definición de tipos AST (simplificados)
 ***************************************************/
export interface ParsedNode {
    type: string;                 // "Apply", "Identifier", "Number", etc.
    op?: string | ParsedNode;     // Operador (ej: "add", "mul") o un sub-nodo
    name?: string;                // Nombre si type="Identifier"
    value?: string;               // Valor si type="Number"
    args?: ParsedNode[];          // Sub-nodos (argumentos en expresiones)
    wasMinus?: boolean;           // (Opcional) Indica si es un '-'
    implicit?: boolean;           // (Opcional) Indica multiplicación implícita
}
