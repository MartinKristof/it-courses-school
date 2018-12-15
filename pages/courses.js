import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CourseCardList from '../src/components/CourseCardList';
import Hero from '../src/components/Hero';
import Layout from '../src/layout/Layout';
import api from '../api/api.json';

class Courses extends Component {
  static async getInitialProps() {
    try {
      const courses = api.courses;

      return {
        courses,
      };
    } catch (exception) {
      console.error(exception);

      return {
        courses: [],
      };
    }
  }

  render() {
    const { isLogged, courses } = this.props;

    return (
      <Fragment>
        <Head>
          <title>IT Kurzy - Všechny kurzy</title>
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
              Všechny kurzy
            </Typography>
            <Typography
              component="p"
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Přehled všechny kurzů.
            </Typography>
          </Hero>
        </div>
        <Layout>
          <CourseCardList isLogged={isLogged} courses={courses} />
        </Layout>
      </Fragment>
    );
  }
}

Courses.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired,
};

export default Courses;
