import reactPlugin from "eslint-plugin-react"

export default [
  reactPlugin.configs.flat.all,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    rules: {
      // # Change level.
      // Order
      "react/jsx-sort-props": "warn",
    },
  },
]
