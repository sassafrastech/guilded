import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';

import { COLOR, sitePadding } from '../../styles';

import logo from '../../assets/logo.svg';
import heroSmall from '../../assets/hero-small.jpg';
import heroLarge from '../../assets/hero-large.jpg';

const heroScrim = [
  // Highlight the top of the image to show off the guilded logo.
  'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent, transparent)',
  // Shadow the left of the image for text readability.
  'linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)',
];

const backgroundAttribs = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    minHeight: '95vh',
    background: [...heroScrim, `url(${heroSmall})`].join(', '),
    ...backgroundAttribs,
    [theme.breakpoints.up('md')]: {
      background: [...heroScrim, `url(${heroLarge})`].join(', '),
      ...backgroundAttribs,
    },
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
    maxWidth: 560,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 440,
    },
  },
  dash: {
    width: 76,
    height: 13,
    background: COLOR.primary,
  },
  title: {
    color: COLOR.primary,
    textShadow: '0 1px 1px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
    },
  },
  subtitle: {
    color: COLOR.primary,
    textShadow: '0 1px 1px rgba(0, 0, 0, 0.5)',
    fontWeight: 600,
    lineHeight: 1.3,
    padding: '16px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
  buttonContainer: {
    marginTop: 20,
    paddingBottom: 32,
  },
  button: {
    marginRight: 36,
    marginBottom: 16,
    position: 'relative',
    fontSize: '2rem',

    '&:before': {
      border: `0.5px solid ${COLOR.primary}`,
      borderRadius: 4,
      content: '""',
      position: 'absolute',
      top: -4,
      left: -4,
      width: 'calc(100% + 8px)',
      height: 'calc(100% + 8px)',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="Guilded Logo" />
      <div className={classes.textContainer}>
        <div className={classes.dash} />
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
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            color="primary"
            href="https://guildedcoop.typeform.com/to/vAo4vj"
          >
            Support Guilded
          </Button>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            color="secondary"
            href="https://www.tinyurl.com/guildedlca"
          >
            Join Guilded
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
