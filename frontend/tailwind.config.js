/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    // themeVariants({
    //   themes: {
    //     light: {
    //       selector: ".light-theme",
    //     },
    //     dark: {
    //       selector: ".dark-theme",
    //     },
    //   },
    // }),
    require("tw-elements/plugin.cjs")],
};