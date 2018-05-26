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
    body: {
      color: '#222',
      padding: '15px',
      margin: '0 auto',
      maxWidth: '1000px',
    },
    a: {
      color: 'blue',
      textDecoration: 'none',
    },
    'a:hover': {
      color: 'black',
    },
  })
});

export default typography;
