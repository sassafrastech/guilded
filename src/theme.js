export default {
  // https://material-ui-next.com/customization/themes/#typography
  typography: {
    // Account for base font-size of 62.5%.
    htmlFontSize: 10,
  },
  props: {
    MuiTypography: {
      // Best practice: Don't skip heading levels! This separates semantics from style.
      // https://material-ui.com/components/typography/#accessibility
      variantMapping: {
        h3: 'h1',
        h6: 'h2',
      },
    },
  },
};
