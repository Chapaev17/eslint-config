import { defineConfig } from "eslint/config"
import noSecretsPlugin from "eslint-plugin-no-secrets"
import globals from "globals"
import { parser as tsParser } from "typescript-eslint"
import vueParcser from "vue-eslint-parser"

import importPlugin from "./plugins/importPlugin"
import jsoncPlugin from "./plugins/jsonc"
import jsPlugin from "./plugins/jsPlugin"
import jsxA11yPlugin from "./plugins/jsxA11y"
import nounsanitizedPlugin from "./plugins/nounsanitized"
import prettierPlugin from "./plugins/prettier"
import promisePlugin from "./plugins/promise"
import reactPlugin from "./plugins/react"
import regexpPlugin from "./plugins/regexp"
import securityPlugin from "./plugins/security"
import sonarjsPlugin from "./plugins/sonarjs"
import unicornPlugin from "./plugins/unicorn"
import vuePlugin from "./plugins/vue"

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
  ...importPlugin,
  ...jsPlugin,
  ...vuePlugin,
  ...jsoncPlugin,
  ...nounsanitizedPlugin,
  ...securityPlugin,
  ...promisePlugin,
  ...sonarjsPlugin,
  ...unicornPlugin,
  ...prettierPlugin,
  ...reactPlugin,
  ...regexpPlugin,
  ...jsxA11yPlugin,
  {
    files,
    ignores,
    plugins: {
      // Install as one rule
      "no-secrets": noSecretsPlugin,
    },
    rules: {
      // # On.
      // ## Security.
      "no-secrets/no-secrets": "error",

      // ## Other

      // # Off.

      // He get clear text without space and enlines.
      // "unicorn/prefer-dom-node-text-content": "off",

      // Build with no use variables.
      // "import/no-extraneous-dependencies": "off",
      // "import/prefer-default-export": "off",
      // Conflict with typescript and maybe slow.
      // "unicorn/prefer-json-parse-buffer": "off",
      // "unicorn/no-useless-undefined": "off",

      // # Change level.
      "unicorn/consistent-function-scoping": "warn",
    },
  },
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
  },
])
