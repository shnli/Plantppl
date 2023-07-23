/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  variants: {
    extend: {
      textDecoration: ['hover'], // Enable hover variant for textDecoration
    },
  },

  theme: {
    extend: {},
    fontFamily: {
      Mont: ['Montserrat', 'sans-serif'],
      Barrio: ['Barrio', 'cursive'],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'darkgreen': '#223832',
    },
  },
  plugins: [],
  
}