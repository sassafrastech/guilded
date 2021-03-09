import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';

import { sitePadding } from '../../styles';

import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '95vh',
    background: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    ...sitePadding(theme),
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
  buttonContainer: {
    marginTop: 20,
    paddingBottom: 32,
  },
  button: {
    marginRight: 20,
  },
}));

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
        <div className={classes.buttonContainer}>
          <Button className={classes.button} variant="contained">
            Support Guilded
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            href="https://guildedcoop.typeform.com/to/jFmHAFvv"
          >
            Join Guilded
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
