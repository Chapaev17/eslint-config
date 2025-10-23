import { defineConfig } from "eslint/config"
import { flatConfigs as importPluginflatConfigs } from "eslint-plugin-import"

const noNuxtExtends = [
  importPluginflatConfigs.recommended,
  importPluginflatConfigs.typescript,
]

// eslint-disable-next-line max-lines-per-function
export default function importConfig(parameters: { nuxt?: boolean }) {
  const valideExtends = parameters.nuxt === true ? [] : noNuxtExtends

  return defineConfig([
    {
      extends: valideExtends,
      rules: {
        "import/consistent-type-specifier-style": "warn",

        "import/default": "error",
        "import/dynamic-import-chunkname": "warn",
        // Errors
        "import/export": "error",
        "import/exports-last": "warn",
        // # Off
        // Dont use file format in import.
        "import/extensions": "off",

        "import/first": "warn",
        "import/group-exports": "warn",
        "import/max-dependencies": "warn",

        "import/named": "error",
        "import/namespace": "error",
        "import/newline-after-import": "warn",
        // "import/enforce-node-protocol-usage": "warn",
        "import/no-absolute-path": "warn",
        "import/no-amd": "warn",
        // "import/no-cycle": "warn",
        "import/no-anonymous-default-export": "warn",
        "import/no-commonjs": "warn",
        "import/no-default-export": "warn",
        // Other rules
        "import/no-deprecated": "warn",

        "import/no-duplicates": "warn",
        "import/no-dynamic-require": "warn",
        // Auto-fixable
        "import/no-empty-named-blocks": "warn",
        "import/no-extraneous-dependencies": "warn",
        "import/no-import-module-exports": "warn",
        "import/no-internal-modules": "warn",
        "import/no-mutable-exports": "warn",
        // Warnings
        "import/no-named-as-default": "warn",
        "import/no-named-as-default-member": "warn",
        "import/no-named-default": "warn",
        "import/no-named-export": "warn",
        "import/no-namespace": "warn",
        "import/no-nodejs-modules": "warn",
        "import/no-relative-packages": "warn",
        "import/no-relative-parent-imports": "warn",
        "import/no-restricted-paths": "warn",
        "import/no-self-import": "warn",
        "import/no-unassigned-import": "warn",
        "import/no-unresolved": "error",
        "import/no-unused-modules": "warn",
        "import/no-useless-path-segments": "warn",
        "import/no-webpack-loader-syntax": "warn",
        // # On
        "import/order": [
          "error",
          {
            alphabetize: {
              caseInsensitive: true,
              order: "asc",
            },
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
          },
        ],

        "import/prefer-default-export": "warn",
      },
      settings: {
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx", "vue"],
          },
          typescript: true,
        },
      },
    },
  ])
}
