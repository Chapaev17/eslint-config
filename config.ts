import { defineConfig } from "eslint/config"
import prettierConfigFlat from "eslint-config-prettier/flat"
import jsoncPlugin from "eslint-plugin-jsonc"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import noSecretsPlugin from "eslint-plugin-no-secrets"
import nounsanitizedPlugin from "eslint-plugin-no-unsanitized"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import promisePlugin from "eslint-plugin-promise"
import reactPlugin from "eslint-plugin-react"
import * as regexpPlugin from "eslint-plugin-regexp"
import securityPlugin from "eslint-plugin-security"
import sonarjsPlugin from "eslint-plugin-sonarjs"
import unicornPlugin from "eslint-plugin-unicorn"
import vuePlugin from "eslint-plugin-vue"
import globals from "globals"
import { configs as tsConfigs, parser as tsParser } from "typescript-eslint"
import vueParcser from "vue-eslint-parser"

import importPlugin from "./plugins/importPlugin"
import jsPlugin from "./plugins/jsPlugin.ts"

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

  ...vuePlugin.configs["flat/essential"],
  nounsanitizedPlugin.configs.recommended,
  securityPlugin.configs.recommended,
  promisePlugin.configs["flat/recommended"],
  sonarjsPlugin.configs.recommended,
  unicornPlugin.configs.all,
  // Enable in commit linter
  prettierConfigFlat,
  prettierPluginRecommended,
  ...jsoncPlugin.configs["flat/recommended-with-jsonc"],
  ...tsConfigs.strict,
  ...tsConfigs.stylistic,
  // If use type checking in eslint
  // ...tsEslint.configs.strictTypeChecked,
  // ...tsEslint.configs.stylisticTypeChecked,
  // {
  //   LanguageOptions: {
  //     ParserOptions: {
  //       ProjectService: true,
  //       ExtraFileExtensions: [".vue"],
  //     },
  //   },
  // },
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
    plugins: {
      "no-secrets": noSecretsPlugin,
      // Unicorn: pluginUnicorn,
      react: reactPlugin,
      regexp: regexpPlugin,
      nounsanitizedPlugin,
      "jsx-a11y": jsxA11yPlugin,
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
      // "unicorn/filename-case": [
      //   "error",
      //   {
      //     Cases: {
      //       KebabCase: true,
      //       CamelCase: true,
      //       SnakeCase: true,
      //       PascalCase: true,
      //     },
      //   },
      // ],

      // # Off.
      // Use v-html.
      "vue/no-v-html": "off",

      // Not write jsdoc comments.
      "require-jsdoc": "off",
      "valid-jsdoc": "off",
      // He get clear text without space and enlines.
      // "unicorn/prefer-dom-node-text-content": "off",
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
      // "unicorn/prefer-json-parse-buffer": "off",
      // "unicorn/no-useless-undefined": "off",

      // # Change level.
      // "unicorn/consistent-function-scoping": "warn",
      // Order
      "react/jsx-sort-props": "warn",
      // Change error to wart. This most build in dev with this.
      "@typescript-eslint/no-unused-vars": "warn",
      // Broke commented commented code
      "capitalized-comments": "off",
      // Conflict with "import/order"
      "sort-imports": "off",
      "one-var": "off",

      // # For vue template
      // "max-len": [
      //   "warn",
      //   {
      //     Code: 79,
      //     IgnoreUrls: true,
      //     IgnoreStrings: true,
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
      // Tags.
      // "vue/html-closing-bracket-newline": [
      //   "error",
      //   {
      //     Singleline: "never",
      //     Multiline: "always",
      //     SelfClosingTag: {
      //       Singleline: "never",
      //       Multiline: "never",
      //     },
      //   },
      // ],
      // Dont need default props if require is true
      "vue/require-default-prop": "off",
      "vue/max-attributes-per-line": [
        "warn",
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
])

