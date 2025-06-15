/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anurati: ['Anurati', 'sans-serif'],
        Playfair : ['Playfair' , 'sans-serif']
      },
      colors: {
        lightGray: '#F2F0F1',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}