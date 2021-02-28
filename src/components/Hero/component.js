import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.jpg';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    minHeight: 300,
    background: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textContainer: {
    paddingTop: 160,
    maxWidth: 600,
  },
  title: {
    color: '#FFF9EF',
  },
  subtitle: {
    color: '#FFF9EF',
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="Guilded Logo" />
      <div className={classes.textContainer}>
        <Typography className={classes.title} variant="h3">
          True empowerment for freelancers
        </Typography>
        <Typography className={classes.subtitle} variant="h6">
          Guilded is a freelancer worker cooperative that focuses on the agency,
          decision-making and economic power of the freelancer. We offer
          invoicing, tax preparation, health care and advocacy support so that
          you can focus on doing what you do best. Scroll down to learn more.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
