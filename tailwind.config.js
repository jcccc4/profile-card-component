/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        circle: "622px",
        card:'326px'
      },
      height: {
        circle: "622px",
        card:'374px'
      },
      minWidth:{
        circle: "622px",
      }, minHeight:{
        circle: "622px",
      },maxWidth:{
        circle: "622px",
      }, maxHeight:{
        circle: "622px",
      },fontFamily:{
        ks:['Kumbh Sans', 'sans-serif']
      },colors:{
        'primary':'#2E3349',
        'gray':'#6B7082',
      },fontSize:{
        main:['18px','22px'],
        secondary:['14px','17px']
      }
    },
  },
  plugins: [],
};
