import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PowerOffIcon from '@material-ui/icons/PowerOff';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Link from 'next/link';
import { withRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Typography from '@material-ui/core/Typography/Typography';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Grid from '@material-ui/core/Grid';

const { publicRuntimeConfig } = getConfig();

const styles = (theme) => ({
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  project: {
    textAlign: 'right',
    color: theme.palette.primary.contrastText,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      fontSize: 20,
    },
  },
  grow: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
});

class Navigation extends React.Component {
  ROUTE_COURSES = '/courses';
  ROUTE_FAVORITES = '/favorites';
  ROUTE_LOGIN = '/login';
  ROUTE_SIGNIN = '/signin';

  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleLogout = () => {
    this.props.handleLogout();
  };

  render() {
    const { classes, isLogged, router } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List component="nav" role="navigation" aria-label="Main navigation">
          <Link
            href={this.ROUTE_COURSES}
            as={`${publicRuntimeConfig.linkPrefix}${this.ROUTE_COURSES}`}
            prefetch
          >
            <ListItem
              button
              selected={router.route === this.ROUTE_COURSES}
              tabIndex={1}
            >
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Všechny kurzy" />
            </ListItem>
          </Link>
          {isLogged && (
            <Link
              href={this.ROUTE_FAVORITES}
              as={`${publicRuntimeConfig.linkPrefix}${this.ROUTE_FAVORITES}`}
              prefetch
            >
              <ListItem button selected={router.route === this.ROUTE_FAVORITES}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Oblíbené" />
              </ListItem>
            </Link>
          )}
        </List>
        <Divider />
        <List>
          {isLogged ? (
            <ListItem button onClick={this.handleLogout}>
              <ListItemIcon>
                <PowerOffIcon />
              </ListItemIcon>
              <ListItemText primary="Odhlásit se" />
            </ListItem>
          ) : (
            <Fragment>
              <Link
                href={this.ROUTE_LOGIN}
                as={`${publicRuntimeConfig.linkPrefix}${this.ROUTE_LOGIN}`}
                prefetch
              >
                <ListItem button selected={router.route === this.ROUTE_LOGIN}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Přihlásit" />
                </ListItem>
              </Link>
              <Link
                href={this.ROUTE_SIGNIN}
                as={`${publicRuntimeConfig.linkPrefix}${this.ROUTE_SIGNIN}`}
                prefetch
              >
                <ListItem button selected={router.route === this.ROUTE_SIGNIN}>
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Registrovat" />
                </ListItem>
              </Link>
            </Fragment>
          )}
        </List>
      </div>
    );

    return (
      <AppBar position="static" role="banner" className={classes.root}>
        <Grid container alignItems="center">
          <Grid item md={6}>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className={classes.grow}
                component="p"
                variant="h6"
                noWrap
              >
                <img
                  width={50}
                  height={50}
                  src={`${publicRuntimeConfig.cdnPath}/static/images/logo.svg`}
                  alt="Logo IT Kurzy Pišinger"
                />
                <Link
                  href="/"
                  prefetch
                  as={`${publicRuntimeConfig.linkPrefix}/`}
                >
                  <a className={classes.link}>{'<IT> Kurzy = Pišinger'}</a>
                </Link>
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item md={6}>
            <Typography component="p" className={classes.project} variant="h6">
              Toto je školní projekt studentů ČZU oboru INFONK
            </Typography>
          </Grid>
        </Grid>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </AppBar>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(withRouter(Navigation));
