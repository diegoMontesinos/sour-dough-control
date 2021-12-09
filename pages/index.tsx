import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import connectDB from '../lib/connectDB';
import Culture from '../models/Culture';

import Layout from '../components/Layout';

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

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await connectDB();

  // /* find all the data in our database */
  // const result = await Pet.find({});
  // const pets = result.map((doc) => {
  //   const pet = doc.toObject();
  //   pet._id = pet._id.toString();
  //   return pet;
  // });

  return { props: { pets: 1 } };
}

export default Home;
