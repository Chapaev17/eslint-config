import jsEslint from "@eslint/js"
import { defineConfig } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import pluginImport from "eslint-plugin-import"
import eslintPluginJsonc from "eslint-plugin-jsonc"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import pluginNoSecrets from "eslint-plugin-no-secrets"
import nounsanitized from "eslint-plugin-no-unsanitized"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import pluginPromise from "eslint-plugin-promise"
import pluginReact from "eslint-plugin-react"
import * as pluginRegexp from "eslint-plugin-regexp"
import pluginSecurity from "eslint-plugin-security"
import sonarjs from "eslint-plugin-sonarjs"
import pluginUnicorn from "eslint-plugin-unicorn"
import pluginVue from "eslint-plugin-vue"
import globals from "globals"
import tsEslint from "typescript-eslint"
import vueParcser from "vue-eslint-parser"

import rules from "./rules.ts"

const ignores = [
  "node_modules/**/*",
  "dist/**/*",
  ".nuxt/**/*",
  // "libs/**/*",
  "static/sw.js",
  "src/types/backend/backendApi.ts",
]

export default defineConfig([
  jsEslint.configs.all,
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
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic,
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
    rules,
  },
])
