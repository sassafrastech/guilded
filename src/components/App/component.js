import React from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

import Hero from '../Hero/component';

import '@fontsource/roboto';
import theme from '../../theme';

const muiTheme = createMuiTheme(theme);

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Hero />
    </ThemeProvider>
  );
};

export default App;
