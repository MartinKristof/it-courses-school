import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 300,
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      maxWidth: 550,
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      maxWidth: 800,
    },
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      maxWidth: 1100,
    },
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 6}px`,
    },
  },
});

const Hero = ({ classes, children }) => (
  <div className={classes.heroUnit}>
    <div className={classes.heroContent}>{children}</div>
  </div>
);

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Hero);
