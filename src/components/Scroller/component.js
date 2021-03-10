import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {},
});

const Scroller = () => {
  const classes = useStyles();

  return <div className={classes.container}></div>;
};

export default Scroller;
