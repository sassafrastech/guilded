import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFF9EF',
  },
  icon: {
    maxWidth: 48,
    height: 48,
  },
});

const Services = ({ icon, title, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.icon} src={icon} alt="" />
      <Typography className={classes.title} variant="subtitle1">
        {title}
      </Typography>
      <Typography className={classes.description} variant="body2">
        {description}
      </Typography>
    </div>
  );
};

Services.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Services;
