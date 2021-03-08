import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import ServiceCard from './ServiceCard/component';

import bill from '../../assets/bill.svg';
import tax from '../../assets/tax.svg';
import stethoscope from '../../assets/stethoscope.svg';

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
        <ServiceCard
          icon={bill}
          title="Invoicing, Collections & Tax Preparation"
          description="Invoice and collect payments from your clients through Guilded and stop losing sleep around client non-payment. Guilded also provides annual and state tax preparation for members."
        />
        <ServiceCard
          icon={tax}
          title="Network & Connect"
          description="Connect with other freelancers within your city and state for larger contracts, professional development and mutual support. Join the movement and connect with other labor and social justice groups fighting for workers rights."
        />
        <ServiceCard
          icon={stethoscope}
          title="Health Care Access"
          description="Access to our network of Direct Primary Care clinics for all your primary care needs."
        />
      </div>
      <Typography className={classes.legalText}>
        Copyright &copy; 2021
      </Typography>
    </div>
  );
};

export default Services;
