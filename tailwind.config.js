/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': 'var(--cyber-blue)',
        'cyber-purple': 'var(--cyber-purple)',
        'cyber-pink': 'var(--cyber-pink)',
        'cyber-dark': 'var(--cyber-dark)',
        'cyber-gray': 'var(--cyber-gray)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'grid-scroll': 'grid-scroll 20s linear infinite',
        'cyber-spin': 'cyber-spin 1s linear infinite',
      },
      keyframes: {
        'grid-scroll': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '20px 20px' },
        },
        'cyber-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 10px var(--cyber-blue), 0 0 20px var(--cyber-blue)',
        'neon-purple': '0 0 10px var(--cyber-purple), 0 0 20px var(--cyber-purple)',
        'neon-pink': '0 0 10px var(--cyber-pink), 0 0 20px var(--cyber-pink)',
      },
    },
  },
  plugins: [],
} 