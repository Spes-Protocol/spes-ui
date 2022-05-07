// ----------------------------------------------------------------------

import { TypographyOptions } from "@mui/material/styles/createTypography";

function pxToRem(value) {
    return `${value / 16}rem`;
  }
  
  function responsiveFontSizes({ sm, md, lg }) {
    return {
      '@media (min-width:600px)': {
        fontSize: pxToRem(sm)
      },
      '@media (min-width:900px)': {
        fontSize: pxToRem(md)
      },
      '@media (min-width:1200px)': {
        fontSize: pxToRem(lg)
      }
    };
  }

  const typography: TypographyOptions = {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    
    h1: {
      fontWeight: 700,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 })
    },
    h2: {
      fontWeight: 700,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
      ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
    },
    h5: {
      fontWeight: 300,
      color: '#616161',
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
    },
    h6: {
      fontWeight: 700,
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
      ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
    },
    subtitle1: { // turning this to what i need for the landing page
      fontWeight: 400,
      lineHeight: 28 / 18,
      fontSize: pxToRem(30),
      ...responsiveFontSizes({ sm: 22, md: 22, lg: 22 })
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14)
    },
    body1: { // using this for features
      lineHeight: 1.5,
      fontSize: pxToRem(16)
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(18),
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12)
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      letterSpacing: 1.1,
      textTransform: 'uppercase' as const,
    },
  };
  
  export default typography;
  