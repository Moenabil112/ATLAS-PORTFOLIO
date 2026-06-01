/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0B',
        graphite: {
          DEFAULT: '#1C1C1E',
          light: '#2C2C2E',
          mid: '#3A3A3C',
        },
        gold: {
          DEFAULT: '#B8962E',
          light: '#D4AF5A',
          pale: '#E8D5A3',
        },
        sand: {
          DEFAULT: '#C4A882',
          light: '#E8D9C0',
        },
        'deep-green': {
          DEFAULT: '#1A3D2E',
          mid: '#1E5C3A',
          soft: '#2D7A50',
        },
        ivory: '#F5F0E8',
      },
      fontFamily: {
        sans: ['Alexandria', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['Alexandria', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
