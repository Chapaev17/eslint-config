import { defineConfig } from "eslint/config"
import vuePlugin from "eslint-plugin-vue"

export default function vueConfig() {
  return defineConfig([
    ...vuePlugin.configs["flat/recommended"],
    {
      rules: {
        // Delete leter.
        "vue/multi-word-component-names": "off",

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
        // Acces long strings in template.
        "vue/max-len": "off",
        "vue/html-self-closing": [
          "error",
          {
            html: { normal: "always", void: "always" },
            svg: "always",
            math: "always",
          },
        ],
        // Dont need default props if require is true
        "vue/require-default-prop": "off",
        "vue/max-attributes-per-line": [
          "warn",
          {
            singleline: 20,
            multiline: {
              max: 2,
            },
          },
        ],
        "vue/singleline-html-element-content-newline": "off",
        // Prettier confilict in multiline v-if.
        "vue/html-indent": "off",
        "sort-keys": "off",
      },
    },
  ])
}
