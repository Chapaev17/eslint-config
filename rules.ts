const baseRules = {
  // # Disable
  // Broke commented commented code
  "capitalized-comments": "off",
  // Conflict with "import/order"
  "sort-imports": "off",
  "one-var": "off",

  // # Enable
  "import/order": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index",
        "object",
        "type",
        "unknown",
      ],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
}

const rules = {
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
  // "unicorn/filename-case": [
  //   "error",
  //   {
  //     cases: {
  //       kebabCase: true,
  //       camelCase: true,
  //       snakeCase: true,
  //       pascalCase: true,
  //     },
  //   },
  // ],

  // # Off.
  // Use v-html.
  "vue/no-v-html": "off",

  // Not write jsdoc comments.
  "require-jsdoc": "off",
  "valid-jsdoc": "off",
  // He get clear text without space and enlines.
  // "unicorn/prefer-dom-node-text-content": "off",
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
  // "unicorn/prefer-json-parse-buffer": "off",
  // "unicorn/no-useless-undefined": "off",

  // # Change level.
  // "unicorn/consistent-function-scoping": "warn",
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
    "warn",
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
}

export default { ...rules, ...baseRules }
