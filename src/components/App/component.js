import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';

import Drawer from '../Drawer/component';
import Hero from '../Hero/component';
import Services from '../Services/component';

import '@fontsource/roboto';
import appTheme from '../../theme';

const muiTheme = createMuiTheme(appTheme);

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
  const [isDrawerOpen, setDrawerOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={classes.container}>
        <Drawer
          isOpen={isDrawerOpen}
          handleOpen={handleDrawerOpen}
          handleClose={handleDrawerClose}
        />
        <main className={classes.mainContainer}>
          <Hero />
          <Services />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
