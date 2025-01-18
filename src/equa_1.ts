import { create, all } from "https://esm.sh/mathjs?bundle";

const math = create(all, {});

console.log(getNonNestedFunctions("(n * (n + 1) * (2n + 1) * (3n^4 + 6n^3 - n^2 - n + 1)) / 42"))

function getNonNestedFunctions(input: string): string[] {
    const matches = input.match(/\([ \+\-\*\/\^0-9a-z]+\)/gi);

    return matches ? matches.map(m => m.trim()) : [];
}

