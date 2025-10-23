import { defineConfig } from "eslint/config"
import * as regexpPlugin from "eslint-plugin-regexp"

export default function regexpConfig() {
  return defineConfig([regexpPlugin.configs["flat/all"]])
}
