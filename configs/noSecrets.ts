import { defineConfig } from "eslint/config"
import noSecretsPlugin from "eslint-plugin-no-secrets"

export default function noSecrets() {
  return defineConfig([
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
  ])
}
