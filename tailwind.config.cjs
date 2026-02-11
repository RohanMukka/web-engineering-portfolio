/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--bg-primary)",
          secondary: "#050505",
        },
        primary: {
          text: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          blue: "#2a48d1",
        },
        glass: {
          bg: "var(--glass-bg)",
          border: "var(--glass-border)",
          shadow: "var(--glass-shadow)",
        },
        electric: {
          cyan: "#00d6ff",
          violet: "#bc13fe",
        },
        cosmic: {
          purple: "#1a1a40",
          deep: "#050510",
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
