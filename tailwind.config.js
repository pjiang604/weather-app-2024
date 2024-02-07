/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "offWhite": "var(--offWhite)",
        "lightGrey": 'var(--lightGrey)',
        "lightTeal": 'var(--lightTeal)',
        "darkTeal": "var(--darkTeal)",
        "darkPurple": 'var(--darkPurple)',
        "deepPurple": 'var(--deepPurple)'
      },
      height:{
        "75vh": 'var(--title-height)'
      },
      boxShadow: {
        "grey-shadow": 'var(  --boxShadow-grey)'
      }
    },
  },
  plugins: [],
}
