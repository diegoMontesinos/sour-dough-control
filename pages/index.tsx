import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import dbConnect from '../lib/dbConnect';

import Layout from '../components/Layout';

export const getServerSideProps: GetServerSideProps =
  async () => {
    await dbConnect();

    console.log(123);

    return { props: { pets: 1 } };
  };

const Home: NextPage<{ isConnected: boolean }> = ({
  isConnected,
}) => (
  <Layout title="Sour Dough Cultures">
    <Head>
      <title>Sour Dough Control | Cultures</title>
    </Head>

    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        {isConnected && <p>si</p>}
      </div>
    </div>
  </Layout>
);

export default Home;
