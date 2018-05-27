import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: 'Merriweather',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  baseLineHeight: 1.666,
  baseFontSize: "18px",
  headerFontFamily: ["Merriweather", 'serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    // html: {
    //   background: '#f4f4f4',
    // },
    body: {
      color: '#222',
      padding: '15px',
      margin: '0 auto',
      maxWidth: '1000px',
    },
    h1: {
      textAlign: 'center',
      margin: '50px auto'
    }
  })
});

export default typography;
