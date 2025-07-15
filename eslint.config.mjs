import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import reactHooks from "eslint-plugin-react-hooks"
import { fileURLToPath } from 'url';

// Compatibilidade para configurações estilo ESLintRC
const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url))
});

export default [
  js.configs.recommended,
  ...compat.extends('plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'),

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
    },
    rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  {
    files: ["**/*.css"],
    plugins: {
      css
    },
    languageOptions: {
      parser: css
    }
  }
];
