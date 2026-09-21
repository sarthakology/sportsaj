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
          red: '#CF122D',
          'red-dark': '#B01028',
          'red-light': '#E8354A',
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
        'slide-down': 'slideDown 0.55s ease-out forwards',
        'scale-x': 'scaleX 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
