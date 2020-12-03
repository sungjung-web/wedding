import '../styles/globals.css';
import SearchHead from 'src/components/SearchHead';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
