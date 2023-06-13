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

- #### Config for TS 
  You have to set *ENV* variable `ESLINT_TSCONFIG` with location of TS config for type based linting (`tsconfig.eslint.json` - is searched by default). If there is no TS config - type based linting will not work

    ```json
    {
      "extends": "@sennery/eslint-config/typescript"
    }
    ```

- #### Config for Vue

    ```json
    {
      "extends": "@sennery/eslint-config/vue"
    }
    ```

- #### Basic config for JS (already included in all previous configs)

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

### Config auto fix

- #### VS Code

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

- #### WebStorm

    Open the settings (`Ctrl+Alt+S`) and go to `Languages & Frameworks` > `JavaScript` > `Code Quality Tools` > `ESLint`. Enable the following setting:


- [x] Run eslint --fix on save

