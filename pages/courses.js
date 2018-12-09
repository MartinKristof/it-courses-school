import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CourseCardList from '../src/components/CourseCardList';
import Hero from '../src/components/Hero';
import Layout from '../src/layout/Layout';

const Courses = ({ isLogged }) => (
  <Fragment>
    <Head>
      <title>IT Kurzy - Všechny kurzy</title>
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
          Všechny kurzy
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Přheled všechny kurzů.
        </Typography>
      </Hero>
    </main>
    <Layout>
      <CourseCardList isLogged={isLogged} count={8} />
    </Layout>
  </Fragment>
);

Courses.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Courses;
