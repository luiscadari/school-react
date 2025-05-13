import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: [js, "react", "prettier", "react-hooks"],
    extends: [
      "js/recommended",
      "prettier",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": 0,
      "import/prefer-default-export": 0,
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    },
  },
  { parser: "babel-eslint" },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
