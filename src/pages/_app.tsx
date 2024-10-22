import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CV | Marshall Laszlo Toth</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#5540af" />
      </Head>
      <div className="relative">
        <Component {...pageProps} />
      </div>
    </>
  );
}
