/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
            'first': '#0F67B1',
            'second': '#3FA2F6',
            'third': '#96C9F4',
            'fourth': '#FAFFAF',
            'fifth': '#4C8ED5'
          }
    },
  },
  plugins: [],
}