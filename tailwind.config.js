/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      main:'#6B3CC9',
      sub:'#6F6C90',
      yellow:'#F7BF00',
      black:'#171717',
      white:'#FFFFFF',
      red:'#FF7C46',
      orange:"#F28D35"
    }},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "cupcake"],
  },
}