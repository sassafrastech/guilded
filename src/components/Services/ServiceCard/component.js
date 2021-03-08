import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFF9EF',
  },
});

const Services = ({ title }) => {
  const classes = useStyles();

  return <div className={classes.container}>{title}</div>;
};

Services.propTypes = {
  title: PropTypes.string,
};

export default Services;
