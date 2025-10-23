import { defineConfig } from "eslint/config"
import vuePlugin from "eslint-plugin-vue"

export default function vueConfig() {
  return defineConfig([
    ...vuePlugin.configs["flat/recommended"],
    {
      rules: {
        // # For vue template
        // "max-len": [
        //   "warn",
        //   {
        //     Code: 79,
        //     IgnoreUrls: true,
        //     IgnoreStrings: true,
        //   },
        // ],
        "max-len": "off",

        "sort-keys": "off",
        // Prettier confilict in multiline v-if.
        "vue/html-indent": "off",
        "vue/html-self-closing": [
          "error",
          {
            html: { normal: "always", void: "always" },
            math: "always",
            svg: "always",
          },
        ],
        "vue/max-attributes-per-line": [
          "warn",
          {
            multiline: {
              max: 2,
            },
            singleline: 20,
          },
        ],
        // Acces long strings in template.
        "vue/max-len": "off",
        // Delete leter.
        "vue/multi-word-component-names": "off",
        // Dont need default props if require is true
        "vue/require-default-prop": "off",
        "vue/singleline-html-element-content-newline": "off",
      },
    },
  ])
}
