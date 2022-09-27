# tscode

TypeScript code

## TypeScript config

```
	npx tsc --init --rootDir src --outDir build \
	--esModuleInterop --resolveJsonModule --lib es6 \
	--module commonjs --allowJs true --noImplicitAny true
```

## Nodemon config - nodemon.json
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts && tsc"
}
```
## Prettier config - .prettierrc

```
{
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "auto"
}
```

### nodemon starts with prettier 
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "prettier --config .prettierrc 'src/**/*.ts' --write && ts-node ./src/index.ts && tsc"
}
```
