import React from 'react';
import PropTypes from 'prop-types';
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

export const DRAWER_WIDTH = 240;

const useStyles = makeStyles({
  drawer: {
    width: DRAWER_WIDTH,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    padding: 4,
    justifyContent: 'flex-end',
  },
  listItemLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

const DRAWER_ITEMS = [
  // TODO: This is definitely the wrong email address...
  ['Contact Us', 'mailto:members@gmail.com'],
  ['Take Our Survey', 'https://guildedcoop.typeform.com/to/vrrfHhlE'],
  ['Visit USFWC', 'https://www.usworker.coop'],
];

const GuildedDrawer = ({ isOpen, handleOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        {DRAWER_ITEMS.map(([title, href]) => (
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
