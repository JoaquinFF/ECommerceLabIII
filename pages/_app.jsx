import Head from 'next/head';
import "../styles/styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Concesionaria GF</title>
        <link rel="icon" src="../public/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;