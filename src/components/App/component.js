import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';

import Drawer, { DRAWER_WIDTH } from '../Drawer/component';
import Hero from '../Hero/component';
import Services from '../Services/component';

import '@fontsource/roboto';
import theme from '../../theme';

const muiTheme = createMuiTheme(theme);

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
  },
  mainContainer: {
    flex: 1,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={classes.container}>
        <Drawer />
        <main className={classes.mainContainer}>
          <Hero />
          <Services />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
