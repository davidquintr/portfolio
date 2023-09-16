import PersonInit from './components/person_init'
import AboutMe from './components/about_me'
import HomePage from './components/home_page'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs."></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Portfolio - David Quintanilla"></meta>
        <meta property="og:description" content="Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta name="twitter:title" content="Portfolio - David Quintanilla"></meta>
        <meta name="twitter:description" content="Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs."></meta>
        <meta name="twitter:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>
      </Head>
      <HomePage></HomePage>
    </>
  )
}
