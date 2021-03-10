export const COLOR = {
  primary: '#FFF9EF',
  secondary: '#C33368',
};

export const sitePadding = (theme) => ({
  padding: '0 100px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 40px',
  },
});
