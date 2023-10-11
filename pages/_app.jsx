import Head from 'next/head';
import "../styles/styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Concesionaria GF</title>
        <link rel="icon" src="../public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;