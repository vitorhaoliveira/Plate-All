import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: globals.browser
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint.plugin,
      prettier: pluginPrettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off'
    }
  },
  configPrettier
])
