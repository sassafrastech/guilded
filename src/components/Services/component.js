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
  title: {},
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gridGap: 24,
  },
  card: {
    backgroundColor: '#FFF9EF',
  },
});

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h5">
        Services offered
      </Typography>
      <div className={classes.cardContainer}>
        <div className={classes.card}>1</div>
        <div className={classes.card}>2</div>
        <div className={classes.card}>3</div>
      </div>
      <Typography className={classes.legalText}>
        Copyright &copy; 2021
      </Typography>
    </div>
  );
};

export default Services;
