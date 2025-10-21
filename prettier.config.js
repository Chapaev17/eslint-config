/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  printWidth: 79,
  semi: false,
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  bracketSameLine: false,
  singleAttributePerLine: false,
}
export default config
