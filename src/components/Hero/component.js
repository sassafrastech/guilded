import React from 'react';
import { makeStyles } from '@material-ui/core';

import logo from '../../assets/logo.svg';
import hero from '../../assets/hero.jpg';

const useStyles = makeStyles({
  container: {},
});

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={hero} alt="Woman brainstorming on whiteboard" />
      <img src={logo} alt="Guilded Logo" />
      <div>True empowerment for freelancers</div>
      <div>
        Guilded is a freelancer worker cooperative that focuses on the agency,
        decision-making and economic power of the freelancer. We offer
        invoicing, tax preparation, health care and advocacy support so that you
        can focus on doing what you do best. Scroll down to learn more.
      </div>
    </div>
  );
};

export default Hero;
