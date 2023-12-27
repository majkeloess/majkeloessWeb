/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{html,js,jsx}', './index.html', './src/*.{jsx,js,html}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: "class",
}
