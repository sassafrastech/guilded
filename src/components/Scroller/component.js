import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, ButtonBase } from '@material-ui/core';

import { COLOR } from '../../styles';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    right: 14,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
  },
  dotButton: {
    padding: 6,
    borderRadius: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    border: `2px solid ${COLOR.primary}`,
  },
  topDot: {
    background: COLOR.secondary,
  },
  bottomDot: {
    background: 'black',
  },
});

const Scroller = ({ scrollTo }) => {
  const classes = useStyles();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToComponent = () => {
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.container}>
      <ButtonBase className={classes.dotButton} onClick={scrollToTop}>
        <div className={clsx(classes.dot, classes.topDot)} />
      </ButtonBase>
      <ButtonBase className={classes.dotButton} onClick={scrollToComponent}>
        <div className={clsx(classes.dot, classes.bottomDot)} />
      </ButtonBase>
    </div>
  );
};

Scroller.propTypes = {
  scrollTo: PropTypes.element,
};

export default Scroller;
