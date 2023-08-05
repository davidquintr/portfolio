import Head from "next/head";
import NavBar from "../nav_bar";
import dynamic from "next/dynamic";
import { useConfigContext } from "./config_provider";

const AboutMe = dynamic(() => import("./about_me"));
const PersonalInfo = dynamic(() => import("./personal_info"));

const HomePage = () => {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();

  let title = language == "es"? "Inicio" : "Home"

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="article article-base">
        <NavBar></NavBar>
        <AboutMe></AboutMe>
        <PersonalInfo></PersonalInfo>
      </article>
    </>
  );
};

export default HomePage;
