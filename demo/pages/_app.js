import '../styles/globals.css'
import '@upstash/feedback/dist/style.css'
import FeedbackWidget from '@upstash/feedback'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>title</title>
      </Head>

      <FeedbackWidget />

      <Component {...pageProps} />
    </>
  )
}
