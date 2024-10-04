/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'opacity': 'opacity 0.2s ease-in-out alternate',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}

