import { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';
import Avatar from '@material-ui/core/Avatar/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography/Typography';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import Link from 'next/link';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'next/router';
import { formStyles } from '../src/styles/shared';
import Head from 'next/head';
import getConfig from 'next/config';
import RequiredInputs from '../src/components/RequiredInputs';

const { publicRuntimeConfig } = getConfig();

class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { showNotifier, router, handleLogin } = this.props;

    handleLogin();
    showNotifier('Přihlášení proběhlo v pořádku', 'success');

    router.push('/', `${publicRuntimeConfig.linkPrefix}/`);
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Head>
          <title>IT Kurzy - Přihlášení</title>
        </Head>
        <div className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Přihlášení
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jan@novak.cz"
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
              <FormControl margin="normal" fullWidth>
                <Typography component="p">
                  Nemáte účet?{' '}
                  <Link
                    href="/signin"
                    as={`${publicRuntimeConfig.linkPrefix}/signin`}
                  >
                    <a>Registrujte se!</a>
                  </Link>
                </Typography>
              </FormControl>
              <RequiredInputs />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Přihlásit se
              </Button>
            </form>
          </Paper>
        </div>
      </Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  showNotifier: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default withStyles(formStyles)(withRouter(Login));
