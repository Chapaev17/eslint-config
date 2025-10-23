import { defineConfig } from "eslint/config"
import sonarjsPlugin from "eslint-plugin-sonarjs"

export default function sonarjsConfig() {
  return defineConfig([sonarjsPlugin.configs.recommended])
}
