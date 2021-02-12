import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';

import '@fontsource/roboto';
import theme from '../../theme';

const muiTheme = createMuiTheme(theme);

const useStyles = makeStyles({
  container: {},
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={classes.container}>Hello world</div>
    </ThemeProvider>
  );
};

export default App;
