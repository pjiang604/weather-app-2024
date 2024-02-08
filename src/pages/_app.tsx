import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <header>
          <title>Nimbus Weather App</title>
          <meta name='author' content='Patricia Jiang' />
          <meta name='description' content='Interactive weather web app' />
        </header>
      </Head> */}
      <Component {...pageProps} />
    </>

  )
}
