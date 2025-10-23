import { defineConfig } from "eslint/config"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"

export default function jsxA11yConfig() {
  return defineConfig([jsxA11yPlugin.flatConfigs.strict])
}
