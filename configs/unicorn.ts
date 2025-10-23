import { defineConfig } from "eslint/config"
import unicornPlugin from "eslint-plugin-unicorn"

export default function unicornConfig() {
  return defineConfig([
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
  ])
}
