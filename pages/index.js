import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'next/router';
import CourseCardList from '../src/components/CourseCardList';
import Hero from '../src/components/Hero';
import Layout from '../src/layout/Layout';
import api from '../api/api.json';

const styles = (theme) => ({
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

class Index extends Component {
  static async getInitialProps() {
    try {
      const recommendedCourses = api['courses-recommended'];

      return {
        recommendedCourses,
      };
    } catch (exception) {
      console.error(exception);

      return {
        recommendedCourses: [],
      };
    }
  }

  handleChangeRoute = (route) => (event) => {
    const { router } = this.props;

    router.push(route);
  };

  render() {
    const { classes, isLogged, recommendedCourses } = this.props;

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
              Vítejte na stránce IT Kurzy, které pro vás připravil Petr
              Pišinger. Můžete zde nalézt nejrůznější školení programování.
              <br />
              {!isLogged &&
                'Pokud máte zájem o nějaký určitý kurz, přihlaste se nebo proveďte registraci, poté se podívejte do kurzu nebo můžete stisknout tlačítko koupit.'}
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
          <CourseCardList isLogged={isLogged} courses={recommendedCourses} />
        </Layout>
      </Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  recommendedCourses: PropTypes.array.isRequired,
};

export default withStyles(styles)(withRouter(Index));
