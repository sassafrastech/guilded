import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    minHeight: 300,
    background: '#EBE0C9',
    position: 'relative',
  },
  legalText: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
});

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.legalText}>
        Copyright &copy; 2021
      </Typography>
    </div>
  );
};

export default Services;
