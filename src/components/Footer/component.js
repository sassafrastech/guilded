import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import Partners from './Partners/component';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  legalText: {
    textAlign: 'center',
  },
});

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Partners />

      <Typography className={classes.legalText} variant="body2">
        Copyright &copy; 2021
      </Typography>
    </div>
  );
};

export default Services;
