import React from 'react';

import type { AppProps } from 'next/app';
import { Provider } from 'reakit';

import '../styles/globals.css';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
);

export default App;
