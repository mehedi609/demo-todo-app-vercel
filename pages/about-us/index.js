import React from 'react';
import Head from 'next/head';
import BaseLayout from 'components/layouts/base-layout';

const AboutUs = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Demo App for Testing Vercel Deployment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <h1>About Us Page</h1>
      </>
    </BaseLayout>
  );
};

export default AboutUs;
