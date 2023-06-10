/** @type {import('tailwindcss').Config} */
const {colors} = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    darkMode: 'class',
    extend: {
      colors:{
        'new-blue': '#243c54',
      },
      spacing: {
        '50': '20rem'
      },
    },
  },
  plugins: [],
}

