import { type Config } from "prettier"

const config: Config = {
  tabWidth: 2,
  printWidth: 79,
  semi: false,
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  bracketSameLine: false,
  singleAttributePerLine: false,
}

export default config
