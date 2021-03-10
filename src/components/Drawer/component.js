import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

export const DRAWER_WIDTH = 180;

const useStyles = makeStyles((theme) => ({
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClosed: {
    width: 56 + 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerHeader: {
    display: 'flex',
    padding: 4,
    justifyContent: 'flex-end',
  },
  drawerHeaderOpen: {
    justifyContent: 'flex-end',
  },
  drawerHeaderClosed: {},
  listItemLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  spacer: {
    flex: 1,
  },
}));

const DRAWER_ITEMS = [
  ['Contact Us', 'mailto:members@guilded.coop?subject=WebInquiry:'],
  ['Take Our Survey', 'https://guildedcoop.typeform.com/to/vrrfHhlE'],
  ['Visit USFWC', 'https://www.usworker.coop'],
];

const GuildedDrawer = ({ isOpen, handleOpen, handleClose }) => {
  const classes = useStyles();
  const drawerClasses = clsx(
    isOpen ? classes.drawerOpen : classes.drawerClosed,
  );

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open
      className={drawerClasses}
      classes={{
        paper: drawerClasses,
      }}
    >
      <div
        className={clsx(
          classes.drawerHeader,
          isOpen ? classes.drawerHeaderOpen : classes.drawerHeaderClosed,
        )}
      >
        <IconButton onClick={isOpen ? handleClose : handleOpen}>
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {(isOpen ? DRAWER_ITEMS : []).map(([title, href]) => (
          <a key={title} className={classes.listItemLink} href={href}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </Drawer>
  );
};

GuildedDrawer.propTypes = {
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
};

export default GuildedDrawer;
