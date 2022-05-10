import "../styles/globals.css";
import "@upstash/feedback/index.css";

import Head from "next/head";
import { AppProps } from "next/app";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Feedback Widget</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
