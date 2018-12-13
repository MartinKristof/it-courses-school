import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';
import Avatar from '@material-ui/core/Avatar/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography/Typography';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import { withRouter } from 'next/router';
import { formStyles } from '../src/styles/shared';
import Head from 'next/head';
import { redirectIfAuthenticated } from '../src/services/auth/auth';

class SignIn extends React.Component {
  static getInitialProps(context) {
    if (redirectIfAuthenticated(context)) {
      return {};
    }

    return {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { showNotifier, router, handleLogin } = this.props;

    handleLogin();

    showNotifier('Registrace proběhla v porřádku.', 'success');
    router.push('/');
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Head>
          <title>IT Kurzy - Registrace</title>
        </Head>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrace
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Heslo</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password-again">Potrzení hesla</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password-again"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="firstname">Jméno</InputLabel>
                <Input
                  id="firstname"
                  name="firstname"
                  autoComplete="firstname"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="surname">Příjmení</InputLabel>
                <Input id="surname" name="surname" autoComplete="surname" />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="terms" color="primary" required />}
                label="Souhlasím s obchodními podmínkami"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Registrovat
              </Button>
            </form>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  showNotifier: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default withStyles(formStyles)(withRouter(SignIn));
