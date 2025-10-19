import { defineConfig } from "eslint/config"
import vueParcser from "vue-eslint-parser"
import globals from "globals"

import jsEslint from "@eslint/js"
import tsEslint from "typescript-eslint"

import pluginVue from "eslint-plugin-vue"
import pluginUnicorn from "eslint-plugin-unicorn"
import pluginNoSecrets from "eslint-plugin-no-secrets"
import regexpPlugin from "eslint-plugin-regexp"

// Not compatible with ESLint 9
// import pluginXss from "eslint-plugin-xss"

// import pluginTypescriptEslint, {
//   configs,
// } from "@typescript-eslint/eslint-plugin"
// import pluginReact from "eslint-plugin-react"

// const optimizeRegexAllPlugin = require("eslint-plugin-optimize-regex")
// import nounsanitized from "eslint-plugin-no-unsanitized"
// import importPlugin from "eslint-plugin-import"
// import pluginSecurity from "eslint-plugin-security"
// const airbnbBasePlugin = require("eslint-config-airbnb-base")

import myCustomRules from "./baseConfig9.ts"

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// })

const ignores = [
  "node_modules/**/*",
  "dist/**/*",
  ".nuxt/**/*",
  // "libs/**/*",
  "static/sw.js",
  "src/types/backend/backendApi.ts",
]

export default defineConfig([
  {
    extends: myCustomRules,
    files: ["*.vue", "**/*.vue", "**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
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
        parser: tsEslint.parser,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "no-secrets": pluginNoSecrets,
      unicorn: pluginUnicorn,
    },
  },
  jsEslint.configs.recommended,
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic,
  ...pluginVue.configs["flat/essential"],
  // if use type checking in eslint
  // ...tsEslint.configs.strictTypeChecked,
  // ...tsEslint.configs.stylisticTypeChecked,
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       projectService: true,
  //       extraFileExtensions: [".vue"],
  //     },
  //   },
  // },

  // /** More */
  // regexpPlugin.configs["flat/recommended"], // Regulars
  // ...compat.extends("plugin:optimize-regex/all"), // Regulars
  // ...compat.extends("plugin:lodash/recommended"), // Makes you use lodash
  // ...compat.extends("plugin:promise/recommended"), // Promises
  // // importPlugin.flatConfigs.recommended, // Import
  // ...compat.extends(importPlugin.flatConfigs.typescript), // Typescript import
  // ...compat.extends("plugin:eslint-comments/recommended"), // Eslint comments
  //
  // /** Packs */
  // // ...compat.extends("airbnb-base"),
  // // airbnbBasePlugin,
  // // ...compat.extends("plugin:sonarjs/recommended"),
  // ...compat.extends("plugin:unicorn/all"),
  // // ...compat.extends("google"),
  // ...compat.extends("prettier"), // Prettier
  // //
  // // /** Security */
  // nounsanitized.configs.recommended,
  // pluginSecurity.configs.recommended,
  // ...compat.extends("plugin:jsonc/base"),
  //
  // // /** Core nuxt */
  // ...compat.extends("plugin:jsx-a11y/strict"), // Jsx
  // ...compat.extends("plugin:@typescript-eslint/recommended"),
  // ...compat.extends("plugin:nuxt/recommended"),
  // ...compat.extends("plugin:vue/vue3-recommended"),
  // ...pluginVue.configs["flat/recommended"],
])
