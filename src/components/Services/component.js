import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import ServiceCard from './ServiceCard/component';

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
});

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h5">
        Services offered
      </Typography>
      <div className={classes.cardContainer}>
        <ServiceCard title="Invoicing, Payment & Tax Prep" />
        <ServiceCard title="Network & Connect" />
        <ServiceCard title="Health Care Access" />
      </div>
      <Typography className={classes.legalText}>
        Copyright &copy; 2021
      </Typography>
    </div>
  );
};

export default Services;
