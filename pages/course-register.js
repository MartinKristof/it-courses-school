import React, { Fragment } from 'react';
import Checkout from '../src/components/CourseRegister';
import Head from 'next/head';

const CourseRegister = () => (
  <Fragment>
    <Head>
      <title>IT Kurzy - Přihlášení na kurz</title>
    </Head>
    <Checkout />
  </Fragment>
);

export default CourseRegister;
