/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-one-light': '#ffffff',
        'color-one-dark': '#2c2c37',
        'color-two-light': '#e8f0fb',
        'color-two-dark': '#22252f',
        'color-three-light': '#f4f6ff',
        'color-four-light': '#635dc8',
        'color-five': '#a3a3a3',
        'color-six': '#686d7b',
        'color-seven': '#21212d',
      }
    },
  },
  plugins: [],
}
