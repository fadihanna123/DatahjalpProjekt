import globals from 'globals';
import html from '@html-eslint/eslint-plugin';

const config = [
  { ignores: ['**/node_modules/**'] },
  { languageOptions: { globals: globals.browser } },
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/indent': ['error', 2],
      '@html-eslint/no-extra-spacing-attrs': 'off',
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/require-closing-tags': [
        'error',
        {
          selfClosing: 'always',
        },
      ],
    },
  },
];

export default config;
