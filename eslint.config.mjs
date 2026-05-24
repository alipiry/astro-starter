import js from "@eslint/js";
import eslintComments from "@eslint-community/eslint-plugin-eslint-comments";
import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
  {
    ignores: [
      "dist/**",
      ".astro/**",
      "node_modules/**",
      "public/**",
      "**/*.d.ts",
      ".github/**",
    ],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,
  tseslint.configs.recommended,

  {
    plugins: {
      "eslint-comments": eslintComments,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "eslint-comments/disable-enable-pair": "error",
      "eslint-comments/no-duplicate-disable": "error",
      "eslint-comments/no-unlimited-disable": "error",
      "eslint-comments/no-unused-disable": "error",
      "eslint-comments/no-unused-enable": "error",
    },
  },

  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);
