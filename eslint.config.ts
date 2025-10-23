import { defineConfig } from "eslint/config"
import { flatConfigs as importPluginflatConfigs } from "eslint-plugin-import"

import config from "./config"
import tsPlugin from "./configs/tsConfig"

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
