import globals from 'globals';
import pluginJs from '@eslint/js';
import html from 'eslint-plugin-html';

const config = [
  {
    files: ['**/*.html'],
    plugins: { html },
    languageOptions: { sourceType: 'script' },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];

export default config;
