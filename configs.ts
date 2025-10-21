import jsPlugin from "@eslint/js"
import prettierConfigFlat from "eslint-config-prettier/flat"
import jsoncPlugin from "eslint-plugin-jsonc"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import promisePlugin from "eslint-plugin-promise"
import securityPlugin from "eslint-plugin-security"
import sonarjsPlugin from "eslint-plugin-sonarjs"
import unicornPlugin from "eslint-plugin-unicorn"
import vuePlugin from "eslint-plugin-vue"
import { configs as tsConfigs } from "typescript-eslint"
import nounsanitizedPlugin from "eslint-plugin-no-unsanitized"

export default [
  jsPlugin.configs.all,
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
]
