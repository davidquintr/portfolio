import PersonInit from "./components/person_init";
import NavBar from "./nav_bar";
import Head from "next/head";
import ContactForm from './components/contact_form'
import PageWrapper from "./components/page_wrapper";
import { useConfigContext } from "./components/config_provider";


export default function Contact() {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  
  return (
    <>
      <Head>
        <title>{language == "es" ? "Contacto" : "Contact"}</title>
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
        <NavBar></NavBar>
        <PageWrapper>
          <ContactForm></ContactForm>
        </PageWrapper>
      </article>
    </>
  );
}
