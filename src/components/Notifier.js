import React from 'react';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import SnackbarContent from '@material-ui/core/SnackbarContent/SnackbarContent';

const styles = (theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

class Notifier extends React.Component {
  state = {
    vertical: 'bottom',
    horizontal: 'right',
  };

  render() {
    const { vertical, horizontal } = this.state;
    const {
      classes,
      className,
      message,
      variant,
      isOpen,
      handleClose,
    } = this.props;
    const Icon = variantIcon[variant];

    return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContent
          className={classNames(classes[variant], className)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              {Icon && (
                <Icon
                  className={classNames(classes.icon, classes.iconVariant)}
                />
              )}
              {message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
  }
}

Notifier.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  handleClose: PropTypes.func.isRequired,
};

Notifier.defaultProps = {
  variant: 'success',
  message: '',
};

export default withStyles(styles)(Notifier);
