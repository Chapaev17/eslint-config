import { configs as tsConfigs } from "typescript-eslint"

export default [
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
    rules: {
      // Change error to wart. This most build in dev with this.
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]
