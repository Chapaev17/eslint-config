// import importPlugin from "eslint-plugin-import"

const helpfulWarnings = [
  "export",
  "no-deprecated",
  "no-empty-named-blocks",
  "no-extraneous-dependencies",
  "no-mutable-exports",
  "no-named-as-default",
  "no-named-as-default-member",
  "no-unused-modules",
]

export default [
  {
    settings: {
      "import/resolver": {
        typescript: true,
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", "vue"],
        },
      },
    },
    rules: {
      // # On
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

      // Errors
      "import/export": "error",
      "import/default": "error",
      "import/named": "error",
      "import/namespace": "error",
      "import/no-unresolved": "error",

      // Warnings
      "import/no-named-as-default": "warn",
      "import/no-named-as-default-member": "warn",
      "import/no-duplicates": "warn",

      // Auto-fixable
      "import/no-empty-named-blocks": "warn",
      "import/no-import-module-exports": "warn",
      // "import/enforce-node-protocol-usage": "warn",
      "import/no-absolute-path": "warn",
      "import/no-relative-packages": "warn",
      "import/no-useless-path-segments": "warn",
      "import/consistent-type-specifier-style": "warn",
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-namespace": "warn",

      // Other rules
      "import/no-deprecated": "warn",
      "import/no-extraneous-dependencies": "warn",
      "import/no-mutable-exports": "warn",
      "import/no-unused-modules": "warn",
      "import/no-cycle": "warn",
      "import/no-anonymous-default-export": "warn",
      "import/no-amd": "warn",
      "import/no-commonjs": "warn",
      "import/no-nodejs-modules": "warn",
      "import/no-dynamic-require": "warn",
      "import/no-internal-modules": "warn",
      "import/no-relative-parent-imports": "warn",
      "import/no-restricted-paths": "warn",
      "import/no-self-import": "warn",
      "import/no-webpack-loader-syntax": "warn",
      "import/dynamic-import-chunkname": "warn",
      "import/exports-last": "warn",
      "import/group-exports": "warn",
      "import/max-dependencies": "warn",
      "import/no-default-export": "warn",
      "import/no-named-default": "warn",
      "import/no-named-export": "warn",
      "import/no-unassigned-import": "warn",
      "import/prefer-default-export": "warn",

      // # Off
      // Dont use file format in import.
      "import/extensions": "off",
    },
  },
]
