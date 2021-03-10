import { COLOR } from './styles';

import BebasKai from './assets/BebasKai.woff2';
import Kiona from './assets/Kiona-Regular.woff2';

// Docs: https://material-ui.com/customization/typography/
const fontBase = {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const bebasKai = {
  ...fontBase,
  fontFamily: 'Bebas Kai',
  src: `
    local('Bebas Kai'),
    url(${BebasKai}) format('woff2')
  `,
};

const kiona = {
  ...fontBase,
  fontFamily: 'Kiona',
  src: `
    local('Kiona'),
    url(${Kiona}) format('woff2')
  `,
};

export default {
  palette: {
    primary: { main: COLOR.primary },
    secondary: { main: COLOR.secondary },
  },
  // https://material-ui-next.com/customization/themes/#typography
  typography: {
    // Account for base font-size of 62.5%.
    htmlFontSize: 10,
    fontFamily: 'Bebas Kai, sans-serif',
    h6: {
      fontFamily: 'Kiona, sans-serif',
    },
  },
  props: {
    MuiTypography: {
      // Best practice: Don't skip heading levels! This separates semantics from style.
      // https://material-ui.com/components/typography/#accessibility
      variantMapping: {
        h3: 'h1',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        h7: 'h3',
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // Load all fonts that might be used.
        '@font-face': [bebasKai, kiona],
      },
    },
  },
};
