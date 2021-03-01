import React from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

import Drawer from '../Drawer/component';
import Hero from '../Hero/component';
import Services from '../Services/component';

import '@fontsource/roboto';
import theme from '../../theme';

const muiTheme = createMuiTheme(theme);

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Drawer />
      <main>
        <Hero />
        <Services />
      </main>
    </ThemeProvider>
  );
};

export default App;
