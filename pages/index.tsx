import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/Layout';

const Home: NextPage = () => (
  <Layout title="Sour Dough Cultures">
    <Head>
      <title>Sour Dough Control | Cultures</title>
    </Head>

    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* Replace with your content */}
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </div>
      {/* /End replace */}
    </div>
  </Layout>
);

export default Home;
