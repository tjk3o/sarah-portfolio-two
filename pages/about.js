import Layout from '../components/Layout';
import About from '../components/About';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <Layout route='about'>
      <Head>
        <title>Sarah Anne Art | About</title>
        <meta name='description' content='A little bit about me'></meta>
      </Head>
      <About />
    </Layout>
  );
}
