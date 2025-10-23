import reactPlugin from "eslint-plugin-react"

export default [
  reactPlugin.configs.flat.all,
  reactPlugin.configs.flat["jsx-runtime"],
]
