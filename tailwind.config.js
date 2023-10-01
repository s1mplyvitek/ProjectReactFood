/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        burger: {
          '100%': { transform: 'translate(30vh)' },
        },
        logo: {

          '100%': { transform: 'scale(1.4)' },
        },
        slogo: {

          // '100%': { transform: 'rotate(2deg)' },          
          '0%': { opacity: 0 },
          '100%': { opacity: 1, transform: 'rotate(0.1deg)'},
        }
      }
    },
  },
  plugins: [],
}

