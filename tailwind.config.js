/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFFAF3",
        "secondary": "#FFEDD4",
      },
      borderWidth: {
        '1': '1px'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'moveImg': 'moveImg 5s linear infinite',
        'fromLeftToRight': 'fromLeftToRight 0.8s linear',
        'toLeftFromRight': 'toLeftFromRight 0.5s linear',
        'toUpFromBottom': 'toUpFromBottom 0.6s linear',
      },
      backgroundImage: {
        'infinite-logos-gradient-left': 'linear-gradient(to left,rgba(255,255,255,0), #FFFAF3)',
        'infinite-logos-gradient-right': 'linear-gradient(to right,rgba(255,255,255,0), #FFFAF3)',
        'trending-bg': 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);',
        'companies-bg': 'linear-gradient(307deg, #c084fc 1.9%, #fb7185 85.96%)',
      },
      keyframes: {
        moveImg: {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-15px, -15px)' },
          '50%': { transform: 'translate(-8px, -8px)' },
          '75%': { transform: 'translate(-15px, 8px)' },
          '100%': { transform: 'translate(0)' },
        },
        fromLeftToRight: {
          '0%': { transform: 'translateX(0) skewX(-25deg)' },
          '100%': { transform: 'translateX(70rem) skewX(-25deg)' },
        },
        toLeftFromRight: {
          '49%' : { transform: 'translateX(100%)' },
          '50%' : { opacity: '0', transform: 'translateX(-100%)' },
          '51%' : { opacity: '1' },
        },
        toUpFromBottom: {
          '49%' : { transform: 'translateY(-100%)' },
          '50%' : { opacity: '0', transform: 'translateY(100%)' },
          '51%' : { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}

