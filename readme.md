# The Equalitarian

### A tree of all possible aritmethic paths **(in progress)**
**(avoiding infinite recurssion)**

hear me out
```bash
deno run src/equalitarian.ts
```

this thing above can do stuff like
```ts
cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2

transforms into

d / dx(sin(x)) ^ 2 + integral(cos(x), x) ^ 2 * d / dx(sin(x)) ^ 2 + integral(cos(x), x) ^ 2

and back into

cos(x) ^ 2 + sin(x) ^ 2 * cos(x) ^ 2 + sin(x) ^ 2
```
