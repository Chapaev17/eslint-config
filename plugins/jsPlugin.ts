import jsPlugin from "@eslint/js"

export default [
  jsPlugin.configs.all,
  {
    rules: {
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
      // Not write jsdoc comments.
      "require-jsdoc": "off",
      "valid-jsdoc": "off",
      // Need for correct work no-shadow too.
      "@typescript-eslint/no-shadow": "error",
      "no-restricted-syntax": "off",
      "no-undef": "off",
      // Broke commented commented code
      "capitalized-comments": "off",
      // Conflict with "import/order"
      "sort-imports": "off",
      "one-var": "off",
      // Fix wrong work no-shadow in ts.
      "no-shadow": "off",
    },
  },
]
