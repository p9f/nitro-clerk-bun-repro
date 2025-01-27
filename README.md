to reproduce:

- run the server

```bash
bun install
bun run build
bun run .output/server/index.mjs
```

try to access a route:
```bash
[nitro] [request error] [unhandled] Cannot find package '#crypto' from '/Users/p9f/repos/p9f/nitro-clerk-bun-repro/.output/server/node_modules/@clerk/backend/dist/chunk-G4VEKB6A.mjs'
```
