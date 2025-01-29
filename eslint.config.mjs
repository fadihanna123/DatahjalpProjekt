import globals from 'globals';
import html from 'eslint-plugin-html';

const config = [
  { ignores: ['node_modules'] },
  {
    files: ['**/*.html'],
    plugins: { html },
    languageOptions: { sourceType: 'script' },
  },
  { languageOptions: { globals: globals.browser } },
];

export default config;
