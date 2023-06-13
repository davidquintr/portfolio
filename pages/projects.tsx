import PersonInit from "./components/person_init";
import ProjectsInfo from "./components/projects_info";
import { NavBar } from "./nav_bar";
import Head from "next/head";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <article className="article article-base extended">
        <PersonInit></PersonInit>
        <NavBar></NavBar>
        <ProjectsInfo></ProjectsInfo>
      </article>
    </>
  );
}
