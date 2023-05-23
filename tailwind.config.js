/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      gridRowEnd: {
        'span-1': 'span 1',
        'span-2': 'span 2'
      }
    },
  },
  plugins: [],
}

