import { Html, Head, Main, NextScript } from 'next/document'
import Footer from './components/footer'
import PersonInit from './components/person_init'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href='./icon.svg'></link>
        <meta property="og:title" content="Portfolio - David Quintanilla"></meta>
        <meta property="og:description" content="Programmer and Web Designer"></meta>
        <meta property="og:image" content="./icon.svg"></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta property="og:type" content="portfolio"></meta>
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
