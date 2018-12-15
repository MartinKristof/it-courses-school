import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 6,
    padding: theme.spacing.unit * 6,
  },
});

const Footer = ({ classes }) => (
  <footer className={classes.footer} role="contentinfo">
    <Typography component="p" variant="h6" align="center" gutterBottom>
      IT Kurzy
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      pisinger@it-kurzy.cz <br />
      ©2018
    </Typography>
  </footer>
);

export default withStyles(styles)(Footer);
