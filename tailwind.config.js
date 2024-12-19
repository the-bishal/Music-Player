/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryHover' : '#2A2A2A',
        'primary': '#1F1F1F',
        'secondary': '#ADADAD',
        'cardBg': '#121212',
      },
    },
  },
  plugins: [],
}

