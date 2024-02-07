/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cta: '#2196f3',
        bg: '#141414',
        secondary: '#262728',
        secondaryDark: '#202124',
        disabled: '#80868b',
        white: '#eee',
      },
      keyframes: {
        toBottom: {
          '0%': { transform: 'translateY(-20dvh)' },
        },
        toTop: {
          '100%': { transform: 'translateY(-20dvh)' },
        },
      },
      animation: {
        toBottom: 'toBottom 0.3s linear both',
        toTop: 'toTop 0.3s linear both',
      },
    },
  },
  plugins: [],
};
