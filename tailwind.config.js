import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff'
      },
    },
    fontFamily: {
      display: ['Sora', 'sans-serif'],
    }
  },
  plugins: [nextui()],
}
