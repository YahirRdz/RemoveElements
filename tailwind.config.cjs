/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        lato: ['Lato', 'sans-serif'],
    },
    screens: {
      'xss': '390px',
      'xs': "480px",
      'sm': '640px',
      'md2': '741px',
      'md': '840px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        '4': 'repeat(4, minmax(150px, 1fr))',
        '4xs': 'repeat(4, minmax(64px, 1fr))',
        '5': 'repeat(5, minmax(150px, 1fr))',
        '5xs': 'repeat(5, minmax(64px, 1fr))',
        
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        '6': 'repeat(6, minmax(150px, 1fr))',
        '5': 'repeat(5, minmax(150px, 1fr))',
        '4': 'repeat(4, minmax(150px, 1fr))',
        '3xs': 'repeat(3, minmax(64px, 1fr))',
      },
      boxShadow: {
        '3xl': '0 6px 14px rgba(0, 0, 0, 0.24)',
      }
    },
  },
  plugins: [],
}