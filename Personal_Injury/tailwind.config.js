/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'background': '#FAFBFC',
        'borderColor': '#EDECF4',
        'grey': '#939598'
      },
    },
  },
  plugins: [],
};