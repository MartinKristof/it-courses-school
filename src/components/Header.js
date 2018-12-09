import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

const Header = ({ isLogged, handleLogout }) => (
  <Fragment>
    <CssBaseline />
    <Navigation isLogged={isLogged} handleLogout={handleLogout} />
  </Fragment>
);

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
