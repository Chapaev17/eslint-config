import { defineConfig } from "eslint/config"
import nounsanitizedPlugin from "eslint-plugin-no-unsanitized"

export default function nounsanitizedConfig() {
  return defineConfig([nounsanitizedPlugin.configs.recommended])
}
