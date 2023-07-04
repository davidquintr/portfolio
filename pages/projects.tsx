import ProjectsItem from "./components/project_item";
import technologies from "./assets/json/technologies.json";
import pureProject from "./assets/json/projects_en.json";
import NavBar from "./nav_bar";
import Head from "next/head";
import PageWrapper from "./components/page_wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Panel from "./components/panel";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    let orderProject = pureProject.sort((a, b) =>
      a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
    );
    setProject(orderProject);
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta property="og:title" content="Portfolio | Projects"></meta>
        <meta
          property="og:description"
          content="Frontend developer portfolio."
        ></meta>
        <meta
          property="og:image"
          content="https://davidquintr.github.io/portfolio/thumbnail.png"
        ></meta>
        <meta
          property="og:url"
          content="https://davidquintr.github.io/portfolio/"
        ></meta>
      </Head>
      <article className="article article-base extended">
        <NavBar></NavBar>
        <PageWrapper>
          <section className="section section-projects">
            <div className="section-title">
              <h2>Projects</h2>
            </div>
            <Panel isProject={true} pureArray={pureProject} setElement={setProject} element={project} pureFilter={technologies}></Panel>
            <div className="section-body projects">
              {project?.map((element, index) => (
                <ProjectsItem key={index} element={element} index={index} />
              ))}
            </div>
          </section>
        </PageWrapper>
      </article>
    </>
  );
}
