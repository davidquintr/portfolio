import Head from "next/head";
import Redirect from "./components/redirect";


export default function Blog() {

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="A blog with explainment, details and code of my projects."></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Portfolio | Blog"></meta>
        <meta property="og:description" content="A blog with explainment, details and code of my projects."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta name="twitter:title" content="Portfolio | Blog"></meta>
        <meta name="twitter:description" content="A blog with explainment, details and code of my projects."></meta>
        <meta name="twitter:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>
      </Head>
      <article className="article article-base extended">
        <Redirect href="blog" />
      </article>
    </>
  );
}
