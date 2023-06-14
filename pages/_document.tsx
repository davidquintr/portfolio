import { Html, Head, Main, NextScript } from 'next/document'
import { Footer } from './components/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Footer></Footer>
        <NextScript />
      </body>
    </Html>
  )
}
