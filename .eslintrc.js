/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:css/recommended',
    'plugin:css/standard',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['html', 'css'],
  rules: {
    'no-console': 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-undef': 'off',
  },
};

module.exports = config;
