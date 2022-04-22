module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:yml/prettier',
    // Always last
    '@vue/prettier',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // For Vue 3.2 <script setup> syntax
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    // https://github.com/primefaces/primevue/issues/1263
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: [
          'selectionMode',
          'headerClass',
          'rowEditor',
          'showFilterMatchModes',
          'filterMatchModeOptions',
          'showFilterOperator',
        ],
      },
    ],
    'yml/quotes': [
      'error',
      {
        prefer: 'single',
        avoidEscape: true,
      },
    ],
    'yml/sort-keys': 'warn',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ],
}
