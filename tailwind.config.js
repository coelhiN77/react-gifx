/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'backgroundMain': "url('/src/components/Image/background.jpg')"
      }
    },
  },
  plugins: []
}
