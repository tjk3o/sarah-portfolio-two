import { getPaintingsByCategory } from '../lib/paintings';
import Layout from '../components/Layout';
import Category from '../components/Category';
import Head from 'next/head';

export default function CategoryPage({ paintingsData }) {
  return (
    <Layout route='ocean'>
      <Head>
        <title>Sarah Anne Art | Ocean</title>
        <meta name='description' content='Paintings of the ocean'></meta>
      </Head>
      <Category paintingsData={paintingsData} category='ocean' />
    </Layout>
  );
}

export async function getStaticProps() {
  const paintingsData = getPaintingsByCategory('ocean');

  return {
    props: {
      paintingsData,
    },
  };
}
