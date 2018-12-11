import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Navigation from './Navigation';
import PropTypes from 'prop-types';
import Breadcrumbs from './Breadcrumbs';

const Header = ({ isLogged, handleLogout }) => (
  <Fragment>
    <CssBaseline />
    <Navigation isLogged={isLogged} handleLogout={handleLogout} />
    <Breadcrumbs />
  </Fragment>
);

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
