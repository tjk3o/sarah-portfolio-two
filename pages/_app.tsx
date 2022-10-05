import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.style.visibility = 'visible';
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
