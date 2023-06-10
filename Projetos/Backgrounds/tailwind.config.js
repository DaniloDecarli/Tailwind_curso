/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cidade': "url('/src/img/bg_cidade.jpg')",
        'tailwind': "url('/src/img/tailwind.png')",
      })
    },
  },
  plugins: [],
}

