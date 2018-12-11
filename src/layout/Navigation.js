import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
import IconButton from '@material-ui/core/IconButton/IconButton';
import Typography from '@material-ui/core/Typography/Typography';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';

const styles = (theme) => ({
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
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
    const { classes, isLogged } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link href="/courses" prefetch>
            <ListItem button>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Všechny kurzy" />
            </ListItem>
          </Link>
          {isLogged && (
            <Link href="/favorites" prefetch>
              <ListItem button>
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
              <Link href="/login" prefetch>
                <ListItem button>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Přihlásit" />
                </ListItem>
              </Link>
              <Link href="/signin" prefetch>
                <ListItem button>
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
      <div className={classes.root}>
        <AppBar position="static">
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
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
            >
              <img
                width={50}
                height={50}
                src="/static/images/logo.svg"
                alt="Logo"
              />
              <Link href="/" prefetch>
                <a className={classes.link}>{'<IT> Kurzy = Pišinger'}</a>
              </Link>
            </Typography>
          </Toolbar>
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
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(Navigation);
