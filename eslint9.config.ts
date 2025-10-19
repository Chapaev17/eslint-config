import { defineConfig } from "eslint/config"
import tsEslint from "typescript-eslint"
import vueParcser from "vue-eslint-parser"
import globals from "globals"

import pluginVue from "eslint-plugin-vue"
import pluginUnicorn from "eslint-plugin-unicorn"
import pluginNoSecrets from "eslint-plugin-no-secrets"
import pluginReact from "eslint-plugin-react"
import * as pluginRegexp from "eslint-plugin-regexp"
import pluginSecurity from "eslint-plugin-security"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import pluginPromise from "eslint-plugin-promise"

import nounsanitized from "eslint-plugin-no-unsanitized"
import jsEslint from "@eslint/js"
import sonarjs from "eslint-plugin-sonarjs"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import eslintPluginJsonc from "eslint-plugin-jsonc"
import pluginImport from "eslint-plugin-import"

// Not compatible with ESLint 9
// Import airbnbBasePlugin from "eslint-config-airbnb-base"
// Import eslintConfigGoogle from "eslint-config-google"
// Import pluginXss from "eslint-plugin-xss"
// Import optimizeRegexAllPlugin from "eslint-plugin-optimize-regex"

// import eslintPluginEslintComments from "eslint-plugin-eslint-comments"
// Lodash
// Import nuxtEslint from "@nuxtjs/eslint-config"

// Import importPlugin from "eslint-plugin-import"

// Const compat = new FlatCompat({
//   BaseDirectory: __dirname,
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
  jsEslint.configs.all,
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic,
  ...pluginVue.configs["flat/essential"],
  nounsanitized.configs.recommended,
  pluginSecurity.configs.recommended,
  pluginPromise.configs["flat/recommended"],
  sonarjs.configs.recommended,
  pluginUnicorn.configs.all,
  // Enable in commit linter
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
  {
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
    settings: {
      "import/resolver": {
        typescript: true,
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", "vue"],
        },
      },
    },
    plugins: {
      "no-secrets": pluginNoSecrets,
      // Unicorn: pluginUnicorn,
      react: pluginReact,
      regexp: pluginRegexp,
      nounsanitized,
      "jsx-a11y": pluginJsxA11y,
    },
    extends: [
      pluginImport.flatConfigs.recommended,
      pluginImport.flatConfigs.typescript,
    ],
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
      "react/jsx-sort-props": "warn",
      // Change error to wart. This most build in dev with this.
      "@typescript-eslint/no-unused-vars": "warn",

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
])
