import { getPaintingsByCategory } from '../lib/paintings';
import Layout from '../components/Layout';
import Category from '../components/Category';
import Head from 'next/head';

export default function CategoryPage({ paintingsData }) {
  return (
    <Layout route='land'>
      <Head>
        <title>Sarah Anne Art | Land</title>
        <meta name='description' content='Paintings of the land'></meta>
      </Head>
      <Category paintingsData={paintingsData} category='land' />
    </Layout>
  );
}

export async function getStaticProps() {
  const paintingsData = getPaintingsByCategory('land');

  return {
    props: {
      paintingsData,
    },
  };
}
