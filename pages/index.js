import Head from 'next/head';
import BaseLayout from 'components/layouts/base-layout';

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Demo App for Testing Vercel Deployment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <h1>Home Page</h1>
      </>
    </BaseLayout>
  );
}
