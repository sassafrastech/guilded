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
import { ChevronLeft } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    padding: 4,
    justifyContent: 'flex-end',
  },
});

const GuildedDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Contact Us mailto:members@gmail.com subject WebInquiry:
  // Take Our Survey https://guildedcoop.typeform.com/to/vrrfHhlE
  // Visit USFWC https://www.usworker.coop
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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default GuildedDrawer;
