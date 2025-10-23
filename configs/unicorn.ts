import unicornPlugin from "eslint-plugin-unicorn"

export default [
  unicornPlugin.configs.all,
  {
    rules: {
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

      // # Change level.
      "unicorn/consistent-function-scoping": "warn",
    },
  },
]
