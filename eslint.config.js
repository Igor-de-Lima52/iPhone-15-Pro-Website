// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
// import { ReactThreeFiber } from '@react-three/fiber'

export default [
  {ignores: ['dist']},
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {jsx: true},
        sourceType: 'module',
      },
    },
    settings: {react: {version: '18.3'}},
    plugins: [react,
      'react-hooks',
      'react-refresh',
      'react-three'],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      quotes: ['error', 'single', {avoidEscape: true}],
      'max-len': ['error', {
        'code': 80,
        'tabWidth': 2,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignorePattern': '^\\s*<.*$', 
      }],
      'object-property-newline': ['error', {'allowMultiplePropertiesPerLine': false}],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {multiline: true},
          ObjectPattern: {multiline: true},
          ImportDeclaration: {
            multiline: true,
            minProperties: 1, 
          },
        },
      ],
      'react/jsx-max-props-per-line': [
        'error',
        {
          'maximum': 1,
          'when': 'always', 
        },
      ],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'function-paren-newline': ['error', 'multiline'],
      'comma-dangle': ['error', 'always-multiline'],

      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      
    },
  },
]