
// todo: make variable name insensitive, but variable difference responsive

import { transform } from "./utils/transform.ts";

// what if I USE THE SIMPLER BASIC IDENTITIES
const expression = prompt(`
  Type as: cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2
  Use x for single variable expressions
  Use a, b, c... for multiple variable expressions
  
  Or just type a constant like 1 (and find out)
  
  Enter a mathematical expression:`);

console.log(`
  ${expression}
    
  transforms into

  ${transform(expression!)}

  ${transform(transform(expression!))}

  ${transform(transform(transform(expression!)))}
`);

/**
 * the following simplify doesn't work, so I better keep working on this,
 * because I need to make THE tree of all possible simplifications (or cyclic transformations)
 * 
 * simplify is good for grouping similar expressions
 * or deleting them
 *  */ 
// console.log(`expression ${expressionFromAST} simplified is ${simplify(expression).toString()}`)