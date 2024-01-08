import ProjectsItem from "./components/project_item";
import technologies from "./assets/json/technologies.json";
import pureProject from "./assets/json/projects_en.json";
import NavBar from "./nav_bar";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Panel from "./components/panel";
import dynamic from "next/dynamic";
import { useConfigContext } from "./components/config_provider";
import Redirect from "./components/redirect";


const PageWrapper = dynamic(() => import("./components/page_wrapper"));

export const metadata = {
  title: "Projects",
};

export default function Projects() {
    // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  const [project, setProject] = useState([]);
  const [showArchive, setShowArchive] = useState(false)
  const buttonArchive = useRef()
  let lightModeActive = darkMode ? "lightMode" : ""

  useEffect(() => {
    let orderProject = pureProject.sort((a, b) =>
      a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
    );
    setProject(orderProject);
  }, []);

  function onArchiveClick(){
    setShowArchive(!showArchive)
  }

  return (
    <>
      <Head>
        <title>{language == "es" ? "Proyectos" :  "Projects"}</title>

        <meta name="description" content="Projects I've personally worked on during my time in university."></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Portfolio | Projects"></meta>
        <meta property="og:description" content="Projects I've personally worked on during my time in university."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta name="twitter:title" content="Portfolio | Projects"></meta>
        <meta name="twitter:description" content="Projects I've personally worked on during my time in university."></meta>
        <meta name="twitter:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

      </Head>
      <article className="article article-base extended">
        <PageWrapper>
          <Redirect href="projects" />
        </PageWrapper>
      </article>
    </>
  );
}
