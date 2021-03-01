import React from 'react';
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

const GuildedDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
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

export default GuildedDrawer;
