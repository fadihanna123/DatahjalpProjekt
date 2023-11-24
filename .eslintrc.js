// @ts-check
const config = {
  env: {
    browser: true,
    es2023: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'stylelint',
    'plugin:editorconfig/all',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['html', 'editorconfig'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'error',
    'editorconfig/eol-last': 'off',
  },
};

module.exports = config;
