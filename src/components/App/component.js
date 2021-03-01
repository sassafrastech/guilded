import React from 'react';
import clsx from 'clsx';
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
import appTheme from '../../theme';

const muiTheme = createMuiTheme(appTheme);

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
  },
  mainContainer: {
    flex: 1,
  },
  drawerShiftable: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
  },
  drawerShifted: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

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
        <main
          className={clsx(
            classes.mainContainer,
            classes.drawerShiftable,
            isDrawerOpen && classes.drawerShifted,
          )}
        >
          <Hero />
          <Services />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
