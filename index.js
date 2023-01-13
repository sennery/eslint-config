const typeRules = require('./typeBasedTypescriptRules')

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
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.vue'],
      },
      rules: {
        ...typeRules,
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
