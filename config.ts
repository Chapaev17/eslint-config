import { defineConfig } from "eslint/config"
import globals from "globals"
import { parser as tsParser } from "typescript-eslint"
import vueParcser from "vue-eslint-parser"

import importConfig from "./configs/importConfig"
import jsConfig from "./configs/jsConfig"
import jsoncConfig from "./configs/jsonc"
import jsxA11yConfig from "./configs/jsxA11y"
import noSecrets from "./configs/noSecrets"
import nounsanitizedConfig from "./configs/nounsanitized"
import perfectionist from "./configs/perfectionist"
import prettierConfig from "./configs/prettier"
import promiseConfig from "./configs/promiseConfig"
import reactConfig from "./configs/react"
import regexpConfig from "./configs/regexp"
import securityConfig from "./configs/security"
import sonarjsConfig from "./configs/sonarjs"
import tsConfig from "./configs/tsConfig"
import unicornConfig from "./configs/unicorn"
import vueConfig from "./configs/vue"

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

const ignores = [
  "node_modules/**/*",
  "dist/**/*",
  ".nuxt/**/*",
  // "libs/**/*",
  "static/sw.js",
  "src/types/backend/backendApi.ts",
]

const rules = {
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
}

export default function cheConfig(parameters?: { nuxt: boolean }) {
  let config = [
    rules,
    {
      files,
      ignores,
      languageOptions: {
        ecmaVersion: 2024,
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2021,
        },
        parser: vueParcser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          parser: tsParser,
        },
      },
    },
    ...importConfig({ nuxt: parameters?.nuxt }),
    ...jsConfig(),
    ...vueConfig(),
    ...jsoncConfig(),
    ...nounsanitizedConfig(),
    ...securityConfig(),
    ...promiseConfig(),
    ...sonarjsConfig(),
    ...unicornConfig(),
    ...prettierConfig(),
    ...reactConfig(),
    ...regexpConfig(),
    ...jsxA11yConfig(),
    ...noSecrets(),
    ...perfectionist(),
  ]

  if (parameters?.nuxt !== true) {
    config = [...config, ...tsConfig()]
  }

  return defineConfig(config)
}
