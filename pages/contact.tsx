import PersonInit from "./components/person_init";
import { NavBar } from "./nav_bar";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <article className="article article-base">
        <PersonInit></PersonInit>
        <NavBar></NavBar>
      </article>
    </>
  );
}
