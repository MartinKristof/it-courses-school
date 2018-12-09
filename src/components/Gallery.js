import React from 'react';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List/List';
import { generate } from '../services/ElementsGenerator';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  image: {
    width: 270,
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      width: 150,
      marginRight: theme.spacing.unit * 3,
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      width: 80,
    },
    [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
      width: 100,
    },
  },
});

const Gallery = ({ classes }) => (
  <List dense={false}>
    {generate(
      <span>
        <img className={classes.image} src="https://via.placeholder.com/150" />
      </span>,
      3,
    )}
  </List>
);

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallery);
