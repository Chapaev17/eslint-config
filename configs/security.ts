import { defineConfig } from "eslint/config"
import securityPlugin from "eslint-plugin-security"

export default function securityConfig() {
  return defineConfig([
    securityPlugin.configs.recommended,

    {
      rules: {
        /** Acces get value by dinamic key. Need control, what
key was't got from user input.
*/
        "security/detect-object-injection": "off",
      },
    },
  ])
}
