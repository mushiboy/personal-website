/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        39: "9.75rem",
      },
      fontFamily: {
        BebasNeue: ["Bebas Neue", "sans-serif"],
        BlackOps: ["Black Ops One", "cursive"],
        Moirai1: ["Moirai One", "cursive"],
        RubikIso: ["Rubik Iso", "cursive"],
        VT323: ["VT323", "monospace"],
        Fipps: ["Fipps", "monospace"],
        PWar: ["PWar", "monospace"],
        Pixel: ["pixel", "monospace"],
      },
      minWidth: {
        screen: "100vw",
      },
      scale: {
        60: "0.60",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
