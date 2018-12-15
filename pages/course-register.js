import { Component, Fragment } from 'react';
import Checkout from '../src/components/CourseRegister';
import Head from 'next/head';
import api from '../api/api';

class CourseRegister extends Component {
  static async getInitialProps({ query }) {
    let { id } = query;

    try {
      const course = api.course[--id];

      return {
        course,
      };
    } catch (exception) {
      console.error(exception);

      return {
        course: null,
      };
    }
  }

  render() {
    const { course } = this.props;

    return (
      <Fragment>
        <Head>
          <title>IT Kurzy - Přihlášení na kurz</title>
        </Head>
        <Checkout course={course} />
      </Fragment>
    );
  }
}

export default CourseRegister;
