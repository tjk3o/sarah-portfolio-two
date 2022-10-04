import { getAllPaintingsData } from '../lib/paintings';
import Layout from '../components/Layout';
import Category from '../components/Category';
import Head from 'next/head';

export default function HomePage({ paintingsData }) {
  return (
    <Layout>
      <Head>
        <title>Sarah Anne Art | Home</title>
        <meta name='description' content='A list of all my paintings'></meta>
      </Head>
      <Category paintingsData={paintingsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const paintingsData = getAllPaintingsData();

  return {
    props: {
      paintingsData,
    },
  };
}
