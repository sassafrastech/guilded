import React from 'react';
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

const Scroller = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ButtonBase className={classes.dotButton}>
        <div className={clsx(classes.dot, classes.topDot)} />
      </ButtonBase>
      <ButtonBase className={classes.dotButton}>
        <div className={clsx(classes.dot, classes.bottomDot)} />
      </ButtonBase>
    </div>
  );
};

export default Scroller;
