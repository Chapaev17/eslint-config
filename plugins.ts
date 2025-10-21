import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import noSecretsPlugin from "eslint-plugin-no-secrets"
import nounsanitizedPlugin from "eslint-plugin-no-unsanitized"
import reactPlugin from "eslint-plugin-react"
import * as regexpPlugin from "eslint-plugin-regexp"

export default {
  "no-secrets": noSecretsPlugin,
  // Unicorn: pluginUnicorn,
  react: reactPlugin,
  regexp: regexpPlugin,
  nounsanitizedPlugin,
  "jsx-a11y": jsxA11yPlugin,
}
