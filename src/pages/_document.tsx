import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer'

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
        <Main />
        <NextScript />

      </body>
      <Footer />
    </Html>
  )
}
