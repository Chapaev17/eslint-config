const pluginNoSecrets = require("eslint-plugin-no-secrets")
const pluginXss = require("eslint-plugin-xss")
const pluginTypescriptEslint = require("@typescript-eslint/eslint-plugin")
const pluginUnicorn = require("eslint-plugin-unicorn")
const pluginReact = require("eslint-plugin-react")
const vuePlugin = require("eslint-plugin-vue")

module.exports = {
  plugins: {
    "no-secrets": pluginNoSecrets,
    xss: pluginXss,
    // "@typescript-eslint": pluginUnicorn,
    // unicorn: pluginTypescriptEslint,
    react: pluginReact,
    vue: vuePlugin,
  },

  settings: {
    "import/resolver": {
      typescript: true,
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", "vue"],
      },
    },
  },
  rules: {
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
    // "xss/no-mixed-html": "error",
    "xss/no-location-href-assign": "error",
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
    // "sort-keys": "warn",

    // # Off.
    // Use v-html.
    "vue/no-v-html": "off",
    // Dont use lodash instead of default js function.
    "lodash/prefer-lodash-method": "off",
    // Not write jsdoc comments.
    // "require-jsdoc": "off",
    // "valid-jsdoc": "off",
    // He get clear text without space and enlines.
    "unicorn/prefer-dom-node-text-content": "off",
    /** Acces get value by dinamic key. Need control, what
    key was't got from user input.
    */
    "security/detect-object-injection": "off",
    // Fix wrong work no-shadow in ts.
    // "no-shadow": "off",
    // Need for correct work no-shadow too.
    // "@typescript-eslint/no-shadow": "error",
    // Dont use file format in import.
    "import/extensions": "off",
    // Delete leter.
    "vue/multi-word-component-names": "off",
    // Build with no use variables.
    "import/no-extraneous-dependencies": "off",
    "no-restricted-syntax": "off",
    "import/prefer-default-export": "off",
    "no-undef": "off",
    // Conflict with typescript and maybe slow.
    "unicorn/prefer-json-parse-buffer": "off",
    "unicorn/no-useless-undefined": "off",

    // # Change level.
    // "unicorn/consistent-function-scoping": "warn",
    // Order
    "react/jsx-sort-props": "warn",
    // Change error to wart. This most build in dev with this.
    // "@typescript-eslint/no-unused-vars": "warn",

    // # For vue template
    // "max-len": [
    //   "warn",
    //   {
    //     code: 79,
    //     ignoreUrls: true,
    //     ignoreStrings: true,
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
    // tags.
    // "vue/html-closing-bracket-newline": [
    //   "error",
    //   {
    //     singleline: "never",
    //     multiline: "always",
    //     selfClosingTag: {
    //       singleline: "never",
    //       multiline: "never",
    //     },
    //   },
    // ],
    // Dont need default props if require is true
    "vue/require-default-prop": "off",
    "vue/max-attributes-per-line": [
      2,
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
  },
}
