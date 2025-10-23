import noSecretsPlugin from "eslint-plugin-no-secrets"

export default [
  {
    plugins: {
      // Install as one rule
      "no-secrets": noSecretsPlugin,
    },
    rules: {
      // # On.
      // ## Security.
      "no-secrets/no-secrets": "error",
    },
  },
]
