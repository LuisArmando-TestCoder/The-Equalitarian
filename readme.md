# The Equalitarian

### A tree of all possible aritmethic paths
**I want identities to by found by a process of continuous automatic transformations,**
**and then pick the tip of the tree that I like the most from whatever generated branch,**
**making the Math Homework make itself in all sorts of different ways**

this command
```bash
deno run src/equalitarian.ts
```

can make transformations such as
```ts
cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2

transforms into

d / dx(sin(x)) ^ 2 + integral(cos(x), x) ^ 2 * d / dx(sin(x)) ^ 2 + integral(cos(x), x) ^ 2

and back into

cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2
```

where the code would look like
```ts
import { astToString } from "./utils/astToString.ts";
import { transformAST } from "./utils/transformAST.ts";
import { bidirectionalParsedIdentitiesMap } from "./utils/bidirectionalIdentities.ts";
import { ParsedNode } from "./utils/types.ts";
import mathParser from "npm:math-parser";

const expression = "cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2";
const originalAST: ParsedNode = mathParser.parse(expression);

const transformedAST = transformAST(originalAST, bidirectionalParsedIdentitiesMap);

const expressionFromAST = astToString(transformedAST);

console.log(`
    ${expression}

    transforms into

    ${expressionFromAST}

    and back into

    ${
    astToString(transformAST(transformedAST, bidirectionalParsedIdentitiesMap))
    }
`);
```

so far, supported expressions are restrained within the math-parser boundaries