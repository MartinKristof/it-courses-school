import { Component, Fragment } from 'react';
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
import RequiredInputs from '../src/components/RequiredInputs';

class SignIn extends Component {
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
        <div className={classes.main}>
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
                  placeholder="jan@novak.cz"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Heslo</InputLabel>
                <Input name="password" type="password" id="password" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password-again">Potrzení hesla</InputLabel>
                <Input name="password" type="password" id="password-again" />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="firstname">Jméno</InputLabel>
                <Input id="firstname" name="firstname" placeholder="Jan" />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="surname" placeholder="Novák">
                  Příjmení
                </InputLabel>
                <Input id="surname" name="surname" />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="terms" color="primary" required />}
                label="Souhlasím s obchodními podmínkami"
              />
              <RequiredInputs />
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
        </div>
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
