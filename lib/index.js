const fs = require('node:fs')
const { join } = require('node:path')
const typeRules = require('./typeBasedTypescriptRules')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'
const tsconfigExists = fs.existsSync(join(process.cwd(), tsconfig))

module.exports = {
  extends: [
    './vue',
    './typescript',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ...(
          !tsconfigExists 
            ? {}
            : {
              tsconfigRootDir: process.cwd(),
              project: [tsconfig],
              extraFileExtensions: ['.vue'],
            }
        ),
      },
      rules: {
        ...(tsconfigExists ? typeRules : []),
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
