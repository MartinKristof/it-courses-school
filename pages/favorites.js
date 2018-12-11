import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CourseCardList from '../src/components/CourseCardList';
import Hero from '../src/components/Hero';
import Layout from '../src/layout/Layout';
import Head from 'next/head';
import { redirectIfNotAuthenticated } from '../src/services/auth/auth';

class Favorites extends React.Component {
  static getInitialProps(context) {
    if (redirectIfNotAuthenticated(context)) {
      return {
        isLogged: false,
      };
    }

    return {
      isLogged: true,
    };
  }

  render() {
    const { isLogged } = this.props;

    return (
      <Fragment>
        <Head>
          <title>IT Kurzy - Oblíbené kurzy</title>
        </Head>
        <main>
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
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Zde si můžete prohlídnout své oblíbené kurzy.
            </Typography>
          </Hero>
        </main>
        <Layout>
          <CourseCardList isLogged={isLogged} count={6} favorites />
        </Layout>
      </Fragment>
    );
  }
}

Favorites.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Favorites;
