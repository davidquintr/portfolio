import PersonInit from './components/person_init'
import AboutMe from './components/about_me'
import HomePage from './components/home_page'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
      <meta property="og:title" content="Portfolio - David Quintanilla"></meta>
        <meta property="og:description" content="Frontend developer portfolio."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
      </Head>
      <HomePage></HomePage>
    </>
  )
}
