/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust as needed
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out both',
        'slide-up': 'slideUp 0.8s ease-out both',
        'zoom-in': 'zoomIn 0.7s ease-out both',
        'tilt': 'tilt 6s infinite linear',
        'knight-rider-glow': 'knightRiderGlow 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        tilt: {
          '0%': { transform: 'rotateZ(0deg)' },
          '25%': { transform: 'rotateZ(1deg)' },
          '50%': { transform: 'rotateZ(0deg)' },
          '75%': { transform: 'rotateZ(-1deg)' },
          '100%': { transform: 'rotateZ(0deg)' },
        },
        knightRiderGlow: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.8), inset 10px 0 15px rgba(255, 0, 0, 0.6)',
            transform: 'rotate(0deg)',
          },
          '50%': {
            boxShadow: '0 0 25px 10px rgba(255, 0, 0, 1), inset -10px 0 20px rgba(255, 0, 0, 0.8)',
            transform: 'rotate(180deg)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.8), inset 10px 0 15px rgba(255, 0, 0, 0.6)',
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
