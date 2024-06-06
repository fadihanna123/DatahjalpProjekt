import globals from 'globals';
import pluginJs from '@eslint/js';

const config = [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'script' },
    plugins: ['html'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];

export default config;
