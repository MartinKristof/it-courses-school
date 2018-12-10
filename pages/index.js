import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'next/router';
import CourseCardList from '../src/components/CourseCardList';
import Hero from '../src/components/Hero';
import Layout from '../src/layout/Layout';

const styles = (theme) => ({
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

class Index extends React.Component {
  handleChangeRoute = (route) => (event) => {
    const { router } = this.props;

    router.push(route);
  };

  render() {
    const { classes, isLogged } = this.props;

    return (
      <Fragment>
        <main>
          <Hero>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              IT Kurzy
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            {!isLogged && (
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleChangeRoute('/login')}
                    >
                      Přihlásit se
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={this.handleChangeRoute('/signin')}
                    >
                      Registrovat se
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}
          </Hero>
        </main>
        <Layout>
          <Typography variant="h4" component="h3">
            Doporučené kurzy
          </Typography>
          <CourseCardList isLogged={isLogged} />
        </Layout>
      </Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default withStyles(styles)(withRouter(Index));
