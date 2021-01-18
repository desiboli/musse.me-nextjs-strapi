import '@/styles/index.css';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import { ThemeProvider } from '@/components/themeContext';
Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <ThemeProvider>
        <h1 className="text-black dark:text-white">
          WHY IS TAILWIND DARK CLASSES NOT WORKING FFS!!!
        </h1>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
