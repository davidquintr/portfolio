import PersonInit from "./components/person_init";
import NavBar from "./nav_bar";
import Head from "next/head";
import ContactForm from './components/contact_form'
import { PageWrapper } from "./components/page_wrapper";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <article className="article article-base extended">
        <PersonInit></PersonInit>
        <NavBar></NavBar>
        <PageWrapper>
          <ContactForm></ContactForm>
        </PageWrapper>
      </article>
    </>
  );
}
