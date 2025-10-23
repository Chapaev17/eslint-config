import securityPlugin from "eslint-plugin-security"

export default [
  securityPlugin.configs.recommended,

  {
    rules: {
      /** Acces get value by dinamic key. Need control, what
key was't got from user input.
*/
      "security/detect-object-injection": "off",
    },
  },
]
