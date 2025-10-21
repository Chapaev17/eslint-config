import { defineConfig } from "eslint/config"
import { flatConfigs as importPluginflatConfigs } from "eslint-plugin-import"

import config from "./config.ts"
import tsPlugin from "./plugins/tsPlugin.ts"

export default defineConfig([
  ...tsPlugin,
  {
    extends: [
      importPluginflatConfigs.recommended,
      importPluginflatConfigs.typescript,
    ],
  },
  ...config,
])
