import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CourseCardList from '../src/components/CourseCardList';
import Hero from '../src/components/Hero';
import Layout from '../src/layout/Layout';
import { redirectIfNotAuthenticated } from '../src/services/auth/auth';
import api from '../api/api.json';

class Favorites extends Component {
  static async getInitialProps(context) {
    if (redirectIfNotAuthenticated(context)) {
      return {
        isLogged: false,
      };
    }

    try {
      const favoriteCourses = api['courses-favorite'];

      return {
        isLogged: true,
        favoriteCourses,
      };
    } catch (exception) {
      console.error(exception);

      return {
        isLogged: true,
        favoriteCourses: [],
      };
    }
  }

  render() {
    const { isLogged, favoriteCourses } = this.props;

    return (
      <Fragment>
        <Head>
          <title>IT Kurzy - Oblíbené kurzy</title>
        </Head>
        <div>
          <Hero>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Oblíbené kurzy
            </Typography>
            <Typography
              component="p"
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Zde si můžete prohlídnout své oblíbené kurzy.
            </Typography>
          </Hero>
        </div>
        <Layout>
          <CourseCardList isLogged={isLogged} courses={favoriteCourses} />
        </Layout>
      </Fragment>
    );
  }
}

Favorites.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  favoriteCourses: PropTypes.array.isRequired,
};

export default Favorites;
