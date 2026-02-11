/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'background-secondary': '#0A0A0C',
        'primary-blue': '#0050FF',
        'electric-cyan': '#00D6FF',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
