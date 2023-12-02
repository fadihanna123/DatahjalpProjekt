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
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'windows'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'no-console': 'warn',
    'editorconfig/eol-last': 'off',
  },
};

module.exports = config;
