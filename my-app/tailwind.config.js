/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ["Bebas Neue", "sans-serif"],
        BlackOps: ["Black Ops One", "cursive"],
        Moirai1: ["Moirai One", "cursive"],
        RubikIso: ["Rubik Iso", "cursive"],
        VT323: ["VT323", "monospace"],
        Fipps: ["Fipps", "monospace"],
        PWar: ["PWar", "monospace"],
      },
      minWidth: {
        screen: "100vw",
      },
    },
  },
  plugins: [],
};
