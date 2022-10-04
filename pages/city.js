import { getPaintingsByCategory } from '../lib/paintings';
import Layout from '../components/Layout';
import Category from '../components/Category';
import Head from 'next/head';

export default function CategoryPage({ paintingsData }) {
  return (
    <Layout route='city'>
      <Head>
        <title>Sarah Anne Art | City</title>
        <meta name='description' content='Paintings of the city'></meta>
      </Head>
      <Category paintingsData={paintingsData} category='city' />
    </Layout>
  );
}

export async function getStaticProps() {
  const paintingsData = getPaintingsByCategory('city');

  return {
    props: {
      paintingsData,
    },
  };
}
