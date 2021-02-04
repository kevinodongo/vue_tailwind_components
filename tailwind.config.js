const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      coolGray: colors.trueGray,
      green: colors.green,
      emerald: colors.emerald,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      pink: colors.pink,
      teal: colors.teal,
      amber: colors.amber,
      lightBlue: colors.lightBlue,
      fuchsia: colors.fuchsia
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
