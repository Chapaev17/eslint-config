import jsPlugin from "@eslint/js"
import { defineConfig } from "eslint/config"

const maxStatementsValue = 15

export function jsConfig() {
  return defineConfig([
    jsPlugin.configs.all,
    {
      rules: {
        // Need for correct work no-shadow too.
        "@typescript-eslint/no-shadow": "error",
        camelcase: ["error", { properties: "never" }],
        // Broke commented commented code
        "capitalized-comments": "off",
        // Comma at the end of the line
        "comma-dangle": ["warn", "always-multiline"],
        "eol-last": "warn",
        "func-style": ["error", "declaration"],
        // Line end format
        "linebreak-style": ["error", "unix"],
        "max-lines-per-function": ["warn", { max: 170, skipComments: true }],
        "max-statements": [
          "warn",
          maxStatementsValue,
          { ignoreTopLevelFunctions: true },
        ],
        // Acces console debug, coze nuxt delete them in build.
        "no-console": ["warn", { allow: ["debug", "error", "warn"] }],
        "no-duplicate-imports": "off",
        "no-magic-numbers": [
          "error",
          {
            ignore: [-1, 0, 1, 2, 3],
            ignoreClassFieldInitialValues: true,
            ignoreDefaultValues: true,
          },
        ],

        // Fix wrong work no-shadow in ts.
        "no-restricted-syntax": "off",
        "no-shadow": "off",
        "no-ternary": "off",
        "no-undef": "off",
        "no-undefined": "off",
        "no-warning-comments": "off",
        "one-var": "off",
        quotes: ["error", "double", { avoidEscape: true }],
        // Not write jsdoc comments.
        "require-jsdoc": "off",
        // Conflict with "import/order"
        "sort-imports": "off",
        "sort-keys": ["warn", "asc", { caseSensitive: false, natural: true }],
        // Not write jsdoc comments.
        "valid-jsdoc": "off",
      },
    },
  ])
}
