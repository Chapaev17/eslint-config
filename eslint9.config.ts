import { defineConfig } from "eslint/config"
import vueParcser from "vue-eslint-parser"
import globals from "globals"

import jsEslint from "@eslint/js"
import tsEslint from "typescript-eslint"

import pluginVue from "eslint-plugin-vue"
import pluginUnicorn from "eslint-plugin-unicorn"
import pluginNoSecrets from "eslint-plugin-no-secrets"
import pluginReact from "eslint-plugin-react"
import * as pluginRegexp from "eslint-plugin-regexp"
import pluginSecurity from "eslint-plugin-security"

// Not compatible with ESLint 9
// import pluginXss from "eslint-plugin-xss"
// Lodash

// const optimizeRegexAllPlugin = require("eslint-plugin-optimize-regex")
// import nounsanitized from "eslint-plugin-no-unsanitized"
// import importPlugin from "eslint-plugin-import"
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

// Not compatible with ESLint 9
// "xss/no-mixed-html": "error",
// "xss/no-location-href-assign": "error",
// Dont use lodash instead of default js function.
// "lodash/prefer-lodash-method": "off",

export default defineConfig([
  jsEslint.configs.recommended,
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic,
  ...pluginVue.configs["flat/essential"],
  pluginSecurity.configs.recommended,
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
      react: pluginReact,
      regexp: pluginRegexp,
    },
    rules: {
      // # On.
      // ## Standart eslint.
      // Line end format
      "linebreak-style": ["error", "unix"],
      // Comma at the end of the line
      "comma-dangle": ["warn", "always-multiline"],
      "eol-last": "warn",
      quotes: ["error", "double", { avoidEscape: true }],
      "no-duplicate-imports": "error",
      // Acces console debug, coze nuxt delete them in build.
      "no-console": ["warn", { allow: ["debug", "error", "warn"] }],
      camelcase: "warn",
      // ## Security.
      "no-secrets/no-secrets": "error",

      // ## Other
      // All old files wrote wrong.
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            camelCase: true,
            snakeCase: true,
            pascalCase: true,
          },
        },
      ],

      // # Off.
      // Use v-html.
      "vue/no-v-html": "off",

      // Not write jsdoc comments.
      "require-jsdoc": "off",
      "valid-jsdoc": "off",
      // He get clear text without space and enlines.
      "unicorn/prefer-dom-node-text-content": "off",
      /** Acces get value by dinamic key. Need control, what
      key was't got from user input.
      */
      "security/detect-object-injection": "off",
      // Fix wrong work no-shadow in ts.
      "no-shadow": "off",
      // Need for correct work no-shadow too.
      "@typescript-eslint/no-shadow": "error",
      // Dont use file format in import.
      // "import/extensions": "off",
      // Delete leter.
      "vue/multi-word-component-names": "off",
      // Build with no use variables.
      // "import/no-extraneous-dependencies": "off",
      "no-restricted-syntax": "off",
      // "import/prefer-default-export": "off",
      "no-undef": "off",
      // Conflict with typescript and maybe slow.
      "unicorn/prefer-json-parse-buffer": "off",
      "unicorn/no-useless-undefined": "off",

      // # Change level.
      "unicorn/consistent-function-scoping": "warn",
      // Order
      // "react/jsx-sort-props": "warn",
      // Change error to wart. This most build in dev with this.
      "@typescript-eslint/no-unused-vars": "warn",

      // # For vue template
      // "max-len": [
      //   "warn",
      //   {
      //     code: 79,
      //     ignoreUrls: true,
      //     ignoreStrings: true,
      //   },
      // ],
      "max-len": "off",
      // Acces long strings in template.
      "vue/max-len": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: { normal: "always", void: "always" },
          svg: "always",
          math: "always",
        },
      ],
      // Prettier confilict with this rule in self closed
      // tags.
      // "vue/html-closing-bracket-newline": [
      //   "error",
      //   {
      //     singleline: "never",
      //     multiline: "always",
      //     selfClosingTag: {
      //       singleline: "never",
      //       multiline: "never",
      //     },
      //   },
      // ],
      // Dont need default props if require is true
      "vue/require-default-prop": "off",
      "vue/max-attributes-per-line": [
        2,
        {
          singleline: 20,
          multiline: {
            max: 2,
          },
        },
      ],
      "vue/singleline-html-element-content-newline": "off",
      // Prettier confilict in multiline v-if.
      "vue/html-indent": "off",
      "sort-keys": "off",
    },
  },

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
  // ...compat.extends("plugin:promise/recommended"), // Promises
  // // importPlugin.flatConfigs.recommended, // Import
  // ...compat.extends(importPlugin.flatConfigs.typescript), // Typescript import
  // ...compat.extends("plugin:eslint-comments/recommended"), // Eslint comments
  //
  // /** Packs */
  // // ...compat.extends("airbnb-base"),
  // // airbnbBasePlugin,
  // // ...compat.extends("plugin:sonarjs/recommended"),
  // // ...compat.extends("google"),
  // ...compat.extends("prettier"), // Prettier
  // //
  // nounsanitized.configs.recommended,
  // ...compat.extends("plugin:jsonc/base"),
  //
  // // /** Core nuxt */
  // ...compat.extends("plugin:jsx-a11y/strict"), // Jsx
  // ...compat.extends("plugin:@typescript-eslint/recommended"),
  // ...compat.extends("plugin:nuxt/recommended"),
  // ...compat.extends("plugin:vue/vue3-recommended"),
  // ...pluginVue.configs["flat/recommended"],
])
