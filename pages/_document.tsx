import { Html, Head, Main, NextScript } from 'next/document'
import Footer from './components/footer'
import PersonInit from './components/person_init'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href='./icon.svg'></link>
      </Head>
      <body>
        <PersonInit></PersonInit>
        <Main />
        <Footer></Footer>
        <NextScript />
      </body>
    </Html>
  )
}
