import { defineConfig } from "eslint/config"
import reactPlugin from "eslint-plugin-react"

export default function reactConfig() {
  return defineConfig([
    reactPlugin.configs.flat.all,
    reactPlugin.configs.flat["jsx-runtime"],
    {
      rules: {
        // # Change level.
        // Order
        "react/jsx-sort-props": "warn",
      },
    },
  ])
}
