import functions from "./functions";

function getSingleLineStringifiedFunction(func: Function) {
  return func
    .toString()
    .replace(/\s+/g, ' ')
    .replace(/ ?([{}(),;=<>+-]) ?/g, '$1');
}

function getNonNestedFunctions(input: string): string[] {
  const regex = /[a-z0-9 ,:_\.\?\/]+\([a-z0-9 ,:_\.\?\*\+\-\/\/]*\)/gi;

  const matches = input.match(regex);

  return matches ? matches.map(m => m.trim()) : [];
}

function getFunctionExpression(input: string) {
  const regex = /[a-z0-9 ,:_\.\?\/]+/gi;

  const matches = input.match(regex);

  return matches![0];
}

function getNonNestedFunctionArguments(input: string): string[] {
  const regex = /([a-z0-9 :_\.\?\/\*\+\-]+)/gi;

  const matches = input.match(regex);

  return matches ? matches.slice(1) : [];
}

function getArgumentList(singleLineStringifiedFunc: string) {
  const argsMatch = singleLineStringifiedFunc.match(/\(([^)]*)\)/);

  if (!argsMatch || !argsMatch[1].trim()) {
    return []; // No argumentList found
  }

  return argsMatch[1].split(',').map(arg => arg.trim());
}

function extractFromFunction(func: Function): any {
  if (typeof func !== "function") {
    throw new Error("Provided argument is not a function");
  }

  const singleLineStringifiedFunc = getSingleLineStringifiedFunction(func);
  const argumentList = getArgumentList(singleLineStringifiedFunc);
  const nonNestedFunctions = getNonNestedFunctions(singleLineStringifiedFunc);
  const functionExpressions = nonNestedFunctions.map(getFunctionExpression);
  const functionArguments = nonNestedFunctions.map(getNonNestedFunctionArguments);

  return {
    argumentList, nonNestedFunctions, functionExpressions, functionArguments
  };
}

// test
const exampleCallback = (a: number, b: number, c: string): string => {
  const result = `${a + b} ${c}` + Math.pow(a, b) / 2 * Math.log10(a / 3 ** b);
  return result;
};

const result = extractFromFunction(exampleCallback);

await Deno.writeTextFile("./log.txt",
  JSON.stringify(result, null, 2),
);
console.log(result)
