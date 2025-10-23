import { defineConfig } from "eslint/config"

import cheConfig from "./config"

export default defineConfig([
  ...cheConfig(),
  {
    rules: {
      "import/no-internal-modules": "off",
    },
  },
])
