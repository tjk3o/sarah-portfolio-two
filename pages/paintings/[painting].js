import Head from 'next/head';
import { getAllPaintingIds, getPaintingData } from '../../lib/paintings';
import PaintingDetail from '../../components/PaintingDetail';
import Layout from '../../components/Layout';

export async function getStaticPaths() {
  const paths = getAllPaintingIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Painting({ paintingData }) {
  return (
    <Layout>
      <Head>
        <title>Sarah Anne Art | Painting</title>
        <meta name='description' content='Painting detail page'></meta>
      </Head>
      <PaintingDetail paintingData={paintingData} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const paintingData = getPaintingData(params.painting);
  return {
    props: {
      paintingData,
    },
  };
}
