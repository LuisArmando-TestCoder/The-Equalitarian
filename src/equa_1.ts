import { create, all } from "https://esm.sh/mathjs?bundle";

const math = create(all, {});
const scope = { n: 17 * Math.random() };
const expression = "(n * (n + 1) * (2n + 1) * (3n^4 + 6n^3 - n^2 - n + 1)) / 42";
const result = math.evaluate(expression, scope);
const expressions = getNonNestedExpressions(expression);
const results = expressions.map(expression => math.evaluate(expression, scope));
// const 

console.log("Main result of ", expression, " => \n", result)

results.forEach((result, index) => {
    console.log("result of ", expressions[index], " => \n", result)
})

function getNonNestedExpressions(input: string): string[] {
    const matches = input.match(/\([ \+\-\*\/\^0-9a-z]+\)/gi);

    return matches ? matches.map(m => m.trim()) : [];
}

