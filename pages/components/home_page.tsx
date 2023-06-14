import Head from "next/head";
import PersonInit from "./person_init";
import NavBar from "../nav_bar";
import PageWrapper from "./page_wrapper";
import AboutMe from "./about_me";
import PersonalInfo from "./personal_info";

 const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <article className="article article-base">
        <NavBar></NavBar>
        <AboutMe></AboutMe>
        <PersonalInfo></PersonalInfo>
      </article>
    </>
  );
};

export default HomePage