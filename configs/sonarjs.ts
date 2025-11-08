import { defineConfig } from "eslint/config"
import sonarjsPlugin from "eslint-plugin-sonarjs"

export function sonarjsConfig() {
  return defineConfig([
    sonarjsPlugin.configs.recommended,
    {
      rules: {
        "sonarjs/todo-tag": "off",
      },
    },
  ])
}
