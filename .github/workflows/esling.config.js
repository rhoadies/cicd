import { defineConfig } from 'eslint';

export default defineConfig({
  extends: [
    'eslint:recommended', 
    'plugin:react/recommended', 
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
  },
});
