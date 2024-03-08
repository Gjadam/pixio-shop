/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite', 
      }
    },
  },
  plugins: [],
}

