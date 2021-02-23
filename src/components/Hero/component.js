import React from 'react';
import { makeStyles } from '@material-ui/core';

import logo from '../../assets/logo.svg';

const useStyles = makeStyles({
  container: {},
});

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={logo} alt="Guilded Logo" />
      <div>Hello world</div>
    </div>
  );
};

export default Hero;
