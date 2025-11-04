import { defineConfig } from "eslint/config"
import unicornPlugin from "eslint-plugin-unicorn"

export default function unicornConfig() {
  return defineConfig([
    unicornPlugin.configs.all,
    {
      rules: {
        // # Change level.
        "unicorn/consistent-function-scoping": "warn",
        "unicorn/no-useless-undefined": "off",

        // All old files wrote wrong.
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              camelCase: true,
              kebabCase: true,
              pascalCase: true,
              snakeCase: true,
            },
          },
        ],
      },
    },
  ])
}
