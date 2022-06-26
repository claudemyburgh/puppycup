const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3F3C97",
          50: "#DEDEF2",
          100: "#CECDEB",
          200: "#AEACDE",
          300: "#8E8CD1",
          400: "#6E6BC4",
          500: "#4D4AB7",
          600: "#3F3C97",
          700: "#2E2C6F",
          800: "#1D1C47",
          900: "#0D0C1F",
        },
        secondary: colors.orange,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
