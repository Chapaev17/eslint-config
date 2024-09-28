const { FlatCompat } = require("@eslint/eslintrc")

const baseConfig = require("./libs/eslint-config/config.js")
const js = require("@eslint/js")
const regexpPlugin = require("eslint-plugin-regexp")
const pluginVue = require("eslint-plugin-vue")
const globals = require("globals")
// const optimizeRegexAllPlugin = require("eslint-plugin-optimize-regex")
const nounsanitized = require("eslint-plugin-no-unsanitized")
const importPlugin = require("eslint-plugin-import")
const pluginSecurity = require("eslint-plugin-security")
// const airbnbBasePlugin = require("eslint-config-airbnb-base")

const typescriptEslintParser = require("@typescript-eslint/parser")
const vueParcser = require("vue-eslint-parser")

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const ignores = [
  "node_modules/**/*",
  "dist/**/*",
  ".nuxt/**/*",
  "libs/**/*",
  "old_files/**/*",
  "static/sw.js",
  "src/types/backend/backendApi.ts",
]

module.exports = [
  js.configs.recommended,
  /** More */
  regexpPlugin.configs["flat/recommended"], // Regulars
  ...compat.extends("plugin:optimize-regex/all"), // Regulars
  ...compat.extends("plugin:lodash/recommended"), // Makes you use lodash
  ...compat.extends("plugin:promise/recommended"), // Promises
  // importPlugin.flatConfigs.recommended, // Import
  ...compat.extends(importPlugin.flatConfigs.typescript), // Typescript import
  ...compat.extends("plugin:eslint-comments/recommended"), // Eslint comments

  /** Packs */
  // ...compat.extends("airbnb-base"),
  // airbnbBasePlugin,
  // ...compat.extends("plugin:sonarjs/recommended"),
  ...compat.extends("plugin:unicorn/all"),
  // ...compat.extends("google"),
  ...compat.extends("prettier"), // Prettier
  //
  // /** Security */
  nounsanitized.configs.recommended,
  pluginSecurity.configs.recommended,
  ...compat.extends("plugin:jsonc/base"),

  // /** Core nuxt */
  ...compat.extends("plugin:jsx-a11y/strict"), // Jsx
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:nuxt/recommended"),
  ...compat.extends("plugin:vue/vue3-recommended"),
  ...pluginVue.configs["flat/recommended"],
  {
    ...baseConfig,
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2024,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignores,
  },
  {
    ...baseConfig,
    files: ["**/*.vue"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
      },
      parser: vueParcser,
      parserOptions: {
        parser: typescriptEslintParser,
        ecmaVersion: 2024,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignores,
  },
]
