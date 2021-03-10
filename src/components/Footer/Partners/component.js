import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

import usfwc from '../../../assets/logo-usfwc.png';
import smart from '../../../assets/logo-smart.svg';
import cci from '../../../assets/logo-cci.svg';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: {
    alignSelf: 'center',
  },
  logo: {
    height: 56,
    margin: 12,
  },
});

const LogoLink = ({ href, src, alt }) => {
  const classes = useStyles();

  return (
    <a href={href}>
      <img className={classes.logo} src={src} alt={alt} />
    </a>
  );
};

LogoLink.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

const Partners = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant="body1">
        Our Partners:
      </Typography>
      <LogoLink
        src={usfwc}
        alt="USFWC Logo"
        href="https://www.usworker.coop/"
      />
      <LogoLink src={smart} alt="Smart Logo" href="https://www.smart.coop/" />

      <Typography className={classes.text} variant="body1">
        Funding From:
      </Typography>
      <LogoLink src={cci} alt="CCI Arts Logo" href="https://www.cciarts.org/" />
    </div>
  );
};

export default Partners;
