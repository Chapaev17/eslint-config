import jsPlugin from "@eslint/js"
import { defineConfig } from "eslint/config"

export default function jsConfig() {
  return defineConfig([
    jsPlugin.configs.all,
    {
      rules: {
        // Need for correct work no-shadow too.
        "@typescript-eslint/no-shadow": "error",
        camelcase: "warn",
        // Broke commented commented code
        "capitalized-comments": "off",
        // Comma at the end of the line
        "comma-dangle": ["warn", "always-multiline"],
        "eol-last": "warn",
        // Line end format
        "linebreak-style": ["error", "unix"],
        // Acces console debug, coze nuxt delete them in build.
        "no-console": ["warn", { allow: ["debug", "error", "warn"] }],
        "no-duplicate-imports": "error",
        "no-restricted-syntax": "off",
        // Fix wrong work no-shadow in ts.
        "no-shadow": "off",
        "no-ternary": "off",
        "no-undef": "off",
        "one-var": "off",
        quotes: ["error", "double", { avoidEscape: true }],
        // Not write jsdoc comments.
        "require-jsdoc": "off",
        // Conflict with "import/order"
        "sort-imports": "off",
        // Not write jsdoc comments.
        "valid-jsdoc": "off",
      },
    },
  ])
}
