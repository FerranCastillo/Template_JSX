import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import refreshPlugin from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
      'react-refresh': refreshPlugin,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js', 'tsx'] }],
      'react/display-name': 'off',
      'react/jsx-fragments': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unescaped-entities': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'class-methods-use-this': 'off',
      'import/default': 'error',
      'import/extensions': [
        'error',
        'never',
        {
          ignorePackages: true,
          json: 'always',
          md: 'always',
          svg: 'always',
          tag: 'always',
        },
      ],
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: true,
          peerDependencies: true,
        },
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'max-classes-per-file': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'lodash.isequal',
              message:
                'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
            },
            {
              name: 'lodash.uniqueId',
              message:
                'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
            },
            {
              name: 'lodash.mergewith',
              message:
                'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
            },
            {
              name: 'lodash.pick',
              message:
                'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
            },
          ],
          // catch-all for any lodash modularized.
          // The CVE is listed against the entire family for lodash < 4.17.11
          patterns: ['lodash.*'],
        },
      ],
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowBind: true,
          allowFunctions: true,
          ignoreDOMComponents: true,
          ignoreRefs: true,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          printWidth: 120,
          tabWidth: 2,
          arrowParens: 'always',
          bracketSpacing: true,
          overrides: [
            {
              files: '*.html',
              options: { parser: 'babel' },
            },
          ],
        },
      ],
      'ban-ts-ignore': 'off',
      camelcase: 'off',
      'explicit-function-return-type': 'off',
      'explicit-member-accessibility': 'off',
      'explicit-module-boundary-types': 'off',
      'interface-name-prefix': 'off',
      'no-empty-function': 'off',
      'no-explicit-any': 'off',
      'no-object-literal-type-assertion': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-var-requires': 'off',
      'no-undef': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/core-modules': ['enzyme'],
      'import/resolver': {
        node: {
          extensions: ['.jsx', '.js', '.ts', '.tsx', '.mjs', '.d.ts'],
          paths: ['node_modules/', 'node_modules/@types/'],
        },
      },
    },
  },
];
