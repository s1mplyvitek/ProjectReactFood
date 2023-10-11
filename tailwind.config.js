/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        burger: {
          '100%': { opacity: 0, transform: 'translate(20vh)' },
          "0%": { opacity: 1 },
        },
        logo: {

          '100%': { transform: 'scale(1.4)' },
        },
        slogo: {

          // '100%': { transform: 'rotate(2deg)' },          
          '0%': { opacity: 0 },
          '100%': { opacity: 1, transform: 'rotate(0.1deg)' },
        }
      }
    },
  },
  plugins: [],
}

