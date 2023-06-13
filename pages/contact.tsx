import PersonInit from "./components/person_init";
import { NavBar } from "./nav_bar";
import Head from "next/head";
import ContactForm from './components/contact_form'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <article className="article article-base extended">
        <PersonInit></PersonInit>
        <NavBar></NavBar>
        <ContactForm></ContactForm>
      </article>
    </>
  );
}
