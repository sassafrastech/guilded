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

import appTheme from '../../theme';
import Scroller from '../Scroller/component';

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

  React.useEffect(() => {
    // Close the drawer by default on screens narrower than 'md'.
    if (window.innerWidth && window.innerWidth < 960) {
      handleDrawerClose();
    }
  }, []);

  const servicesRef = React.createRef();

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
          <Services ref={servicesRef} />
        </main>
        <Scroller scrollTo={servicesRef} />
      </div>
    </ThemeProvider>
  );
};

export default App;
