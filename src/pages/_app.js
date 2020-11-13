import '../styles/globals.css';
import SearchHead from 'src/components/SearchHead';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SearchHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
