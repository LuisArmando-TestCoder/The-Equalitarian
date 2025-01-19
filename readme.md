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

so far, supported expressions are within the math-parser boundaries