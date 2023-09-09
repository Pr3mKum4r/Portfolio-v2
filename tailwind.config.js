/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "concertone": ['Concert One', 'sans-serif'],
        "roboto":['Roboto', 'sans-serif'],
        "robotoslab":['Roboto Slab', 'serif'],
        "josefin":['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
