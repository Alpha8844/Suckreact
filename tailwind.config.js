/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Luckiest Guy"', 'cursive'],
      },
      colors: {
        'suck': {
          'gray': '#4A4A4A',
          'red': '#E53E3E',
          'light-gray': '#D1D1D1',
          'solana': {
            'purple': '#E53E3E',
            'teal': '#4A4A4A'
          }
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(229, 62, 62, 0.5)' },
          'to': { boxShadow: '0 0 40px rgba(229, 62, 62, 0.8)' }
        }
      }
    },
  },
  plugins: [],
} 