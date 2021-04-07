import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import ServiceCard from './ServiceCard/component';
import Footer from '../Footer/component';

import { sitePadding } from '../../styles';

import bill from '../../assets/bill.svg';
import tax from '../../assets/tax.svg';
import stethoscope from '../../assets/stethoscope.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '95vh', // Match hero.
    background: '#EBE0C9',
    position: 'relative',
    ...sitePadding(theme),
  },
  legalText: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  title: {
    padding: '32px 0',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gridGap: 24,
    paddingBottom: 240,
  },
}));

const Services = React.forwardRef((_, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.container}>
      <Typography className={classes.title} variant="h4">
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

      <Footer />
    </div>
  );
});

export default Services;
