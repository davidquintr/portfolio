import Head from "next/head";
import Redirect from "./components/redirect";


export default function Contact() {

  return (
    <>
      <Head>
        <title>{"Contact"}</title>
        <meta name="description" content="A media to contact and social medias."></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Portfolio | Contact"></meta>
        <meta property="og:description" content="A media to contact and social medias."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta name="twitter:title" content="Portfolio | Contact"></meta>
        <meta name="twitter:description" content="A media to contact and social medias."></meta>
        <meta name="twitter:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

      </Head>
      <article className="article article-base extended">
          <Redirect href="contact" />
      </article>
    </>
  );
}
