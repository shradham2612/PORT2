/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#FEFEFE",
        dimWhite: "E7E9FO",
        dblue: "051747",
        gblue: "535F8O",
        lblue: "081F62",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        heading: ["Prompt", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
