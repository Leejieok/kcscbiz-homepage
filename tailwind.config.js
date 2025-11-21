/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff7800',
          hover: '#e66d00',
        },
        brand: {
          blue: '#214BAB',
          lightBg: '#f5f7fd',
          highlight: '#1e40af', // blue-800
        },
        dark: {
          bg: '#1a1a2e',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
