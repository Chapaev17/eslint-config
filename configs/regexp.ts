import { defineConfig } from "eslint/config"
import { configs } from "eslint-plugin-regexp"

export default function regexpConfig() {
  return defineConfig([configs["flat/all"]])
}
