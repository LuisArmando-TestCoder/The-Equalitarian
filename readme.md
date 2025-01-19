# The Equalitarian

### A tree of all possible aritmethic paths 
**(avoiding infinite recurssion)**

is brute force, testing identities against inner functions
```bash
deno run --allow-write src/equalitarian_1.ts
```

uses string identities
```bash
deno run src/equalitarian_2.ts
```

hear me out
```bash
deno run src/equalitarian_3.ts
```

this thing above can do stuff like
```ts
cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2

transforms into

d / dx(sin(x)) ^ 2 + integral(cos(x), x) ^ 2 * d / dx(sin(x)) ^ 2 + integral(cos(x), x) ^ 2

and back into

cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2
```
