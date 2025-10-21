import { defineConfig } from "eslint/config"
import importPlugin from "eslint-plugin-import"
import globals from "globals"
import { parser as tsParser } from "typescript-eslint"
import vueParcser from "vue-eslint-parser"

import configs from "./configs.ts"
import plugins from "./plugins.ts"
import rules from "./rules.ts"

const ignores = [
  "node_modules/**/*",
  "dist/**/*",
  ".nuxt/**/*",
  // "libs/**/*",
  "static/sw.js",
  "src/types/backend/backendApi.ts",
]

const files = [
  "*.js",
  "**/*.js",
  "*.jsx",
  "**/*.jsx",
  "*.ts",
  "**/*.ts",
  "*.tsx",
  "**/*.tsx",
  "*.vue",
  "**/*.vue",
]

export default defineConfig([
  ...configs,
  {
    files,
    ignores,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: vueParcser,
      ecmaVersion: 2024,
      parserOptions: {
        parser: tsParser,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", "vue"],
        },
      },
    },
    plugins,
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules,
  },
])
