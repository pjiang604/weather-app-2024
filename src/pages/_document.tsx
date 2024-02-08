import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <header>
                <title>Nimbus Weather App</title>
                <meta name='author' content='Patricia Jiang' />
                <meta name='description' content='Interactive weather web app' />
            </header>
        </Head>
      <body>
        <Header/>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
