import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = (theme) => ({
  layout: {
    width: 'auto',
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  layoutSlim: {
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const Layout = ({ classes, children, slim }) => {
  const layoutSlim = classes.layoutSlim;

  return (
    <div className={classNames(classes.layout, { layoutSlim: slim })}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  slim: PropTypes.bool,
};

Layout.defaultProps = {
  slim: false,
};

export default withStyles(styles)(Layout);
