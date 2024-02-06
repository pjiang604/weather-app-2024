/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "lightGrey": 'var(--lightGrey)',
        "lightBlue": 'var(--lightBlue)',
        "darkPurple": 'var(--darkPurple)',
        "darkBlue": 'var(--darkBlue)'
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
