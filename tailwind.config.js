/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ['./public/**/*.html',
  "./public/**/*.js",],
  theme: {
    extend: {
      height:{
         custom: "620px"
      },
      spacing: {
        "40-c":"40rem"
      }
    },
  },
  plugins: [],
}
