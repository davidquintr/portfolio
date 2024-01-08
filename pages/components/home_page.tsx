import Head from "next/head";
import dynamic from "next/dynamic";
import { useConfigContext } from "./config_provider";
import Redirect from "./redirect";

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
      <article className="article">
      <Redirect href="" />
      </article>
    </>
  );
};

export default HomePage;
