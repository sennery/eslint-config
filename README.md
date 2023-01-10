# @sennery/eslint-config

My personal basic eslint config for JavaScript + Vue 3

## Usage

### Intall

Add `@sennery/eslint-config` to your project as development dependency:

```sh
pnpm add -D @sennery/eslint-config
```

### Config `.eslintrc`

Add `@sennery` to your eslint config. For example:

```json
{
  "extends": "@sennery"
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
