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
        <div className='person-init'>
          <PersonInit></PersonInit>
        </div>
        <Main />
        <Footer></Footer>
        <NextScript />
      </body>
    </Html>
  )
}
