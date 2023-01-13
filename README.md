# @sennery/eslint-config

My personal eslint config. Key features:

- TypeScript + Vue 3
- Single quotes
- No semicolons
- 2 spaces indent
- Dangling commas
- Sorted imports

## Usage
### Intall

Add `@sennery/eslint-config` to your project as development dependency:

```sh
pnpm add -D @sennery/eslint-config
```

### Config `.eslintrc`

Add `@sennery` to your eslint config for full TypeScript and Vue support:

```json
{
  "extends": "@sennery"
}
```

... or use separate configs:

- Config for TS (there must be `tsconfig.json` in your project directory, so type based linting can work)

```json
{
  "extends": "@sennery/eslint-config/typescript"
}
```

- Config for Vue

```json
{
  "extends": "@sennery/eslint-config/vue"
}
```

- Basic config for JS (already included in all previous configs)

```json
{ 
  "extends": "@sennery/eslint-config/basic"
}
```

### Eslint scripts

Add following eslint commands to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
