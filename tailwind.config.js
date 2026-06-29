/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        brand: {
          red: '#D0102E',
          'red-dark': '#B00D26',
          'red-light': '#FF4D6D',
          black: '#0A0A0A',
          white: '#FFFFFF',
          gray: '#6B6B6B',
          'gray-light': '#E5E5E5',
          'gray-bg': '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        porsche: ['911 Porscha', 'Audiowide', 'system-ui', 'sans-serif'],
        display: ['911 Porscha', 'Audiowide', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        porsche: '0.08em',
        wide: '0.04em',
      },
      padding: {
        'safe-top': 'max(0px, env(safe-area-inset-top))',
        'safe-bottom': 'max(0px, env(safe-area-inset-bottom))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
