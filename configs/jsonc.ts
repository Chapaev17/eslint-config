import { defineConfig } from "eslint/config"
import jsoncPlugin from "eslint-plugin-jsonc"

export default function jsoncConfig() {
  return defineConfig([...jsoncPlugin.configs["flat/recommended-with-jsonc"]])
}
