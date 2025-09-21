/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-5': 'rgba(28, 28, 28, 0.05)',
        'black-10': 'rgba(28, 28, 28, 0.1)',
        'black-20': 'rgba(28, 28, 28, 0.2)',
        'black-40': 'rgba(28, 28, 28, 0.4)',
        'black-100': 'rgba(28, 28, 28, 1)',
        'white-5': 'rgba(255, 255, 255, 0.05)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'white-40': 'rgba(255, 255, 255, 0.4)',
        'white-100': 'rgba(255, 255, 255, 1)',
      },
      fontFamily: {
        'inter': ['Inter', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        '14': ['14px', '20px'],
      },
      spacing: {
        '53': '212px',
      },
      width: {
        '40': '160px',
        '53': '212px',
      },
      borderRadius: {
        '8': '8px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}