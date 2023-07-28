import Head from "next/head";
import PersonInit from "./person_init";
import NavBar from "../nav_bar";
import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("./about_me"));
const PersonalInfo = dynamic(() => import("./personal_info"));

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