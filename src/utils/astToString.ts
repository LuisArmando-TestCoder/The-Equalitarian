export function astToString(ast: any): string {
    if (!ast) return "";

    switch (ast.type) {
        case "Number":
            return ast.value.toString();
        case "Identifier":
            return ast.name;
        case "Apply":
            const operator = ast.op;

            const opName = typeof operator === "object" ? operator.name : operator;

            const args = ast.args.map(astToString);
            switch (opName) {
                case "add":
                    return `${args.join(" + ")}`; // used to be surrounded by ()
                case "sub":
                    return `${args.join(" - ")}`;
                case "mul":
                    return `${args.join(" * ")}`;
                case "div":
                    return `${args[0]} / ${args[1]}`;
                case "pow":
                    return `${args[0]} ^ ${args[1]}`;
                default:
                    return `${opName}(${args.join(", ")})`;
            }

        case "Parentheses":
            return `(${astToString(ast.body)})`;
        default:
            throw new Error(`Unsupported AST node type: ${ast.type}`);
    }
}