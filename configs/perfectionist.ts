import { defineConfig } from "eslint/config"
import perfectionist from "eslint-plugin-perfectionist"

export default function promiseConfig() {
  return defineConfig([
    perfectionist.configs["recommended-natural"],

    {
      rules: {
        // "perfectionist/sort-exports": "off",
        "perfectionist/sort-imports": "off",
        "perfectionist/sort-modules": "off",
      },
    },
  ])
}
