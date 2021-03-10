import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, List, ListItem, ListItemText } from '@material-ui/core';

import usfwc from '../../../assets/logo-usfwc.png';
import smart from '../../../assets/logo-smart.svg';
import cci from '../../../assets/logo-cci.svg';

const useStyles = makeStyles({
  logo: {
    height: 56,
  },
});

const LogoLink = ({ href, src, alt }) => {
  const classes = useStyles();

  return (
    <a href={href}>
      <ListItem button>
        <img className={classes.logo} src={src} alt={alt} />
      </ListItem>
    </a>
  );
};

LogoLink.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

const GuildedDrawer = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Our Partners" />
      </ListItem>
      <LogoLink
        src={usfwc}
        alt="USFWC Logo"
        href="https://www.usworker.coop/"
      />
      <LogoLink src={smart} alt="Smart Logo" href="https://www.smart.coop/" />

      <ListItem>
        <ListItemText primary="Funding From" />
      </ListItem>
      <LogoLink src={cci} alt="CCI Arts Logo" href="https://www.cciarts.org/" />
    </List>
  );
};

export default GuildedDrawer;
