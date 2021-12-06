import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const Document = () => (
  <Html lang="en" className="h-full bg-gray-100">
    <Head>
      <meta
        name="description"
        content="An app for track the sour dough and breadmaking."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
