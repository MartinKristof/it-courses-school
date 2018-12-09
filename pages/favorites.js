import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CourseCardList from '../src/components/CourseCardList';
import enhancedWithAuth from '../src/hoc/withAuth';
import Hero from '../src/components/Hero';
import Layout from '../src/layout/Layout';
import Head from 'next/head';

const Favorites = ({ isLogged }) => (
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
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Zde si můžete prohlídnout své oblíbené kurzy.
        </Typography>
      </Hero>
    </main>
    <Layout>
      <CourseCardList isLogged={isLogged} count={6} favorites />
    </Layout>
  </Fragment>
);

Favorites.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default enhancedWithAuth(Favorites);