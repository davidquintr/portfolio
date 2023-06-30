import PersonInit from "./components/person_init";
import NavBar from "./nav_bar";
import Head from "next/head";
import ContactForm from './components/contact_form'
import PageWrapper from "./components/page_wrapper";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="Portfolio | Contact"></meta>
        <meta property="og:description" content="A media to contact and social medias."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
      </Head>
      <article className="article article-base extended">
        <NavBar></NavBar>
        <PageWrapper>
          <ContactForm></ContactForm>
        </PageWrapper>
      </article>
    </>
  );
}
