import PersonInit from "./components/person_init";
import ProjectsInfo from "./components/projects_info";
import NavBar from "./nav_bar";
import Head from "next/head";
import PageWrapper from "./components/page_wrapper";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="Portfolio - David Quintanilla"></meta>
        <meta property="og:description" content="Frontend developer portfolio."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
      </Head>
      <article className="article article-base extended">
        <NavBar></NavBar>
        <PageWrapper>
          <ProjectsInfo></ProjectsInfo>
        </PageWrapper>
      </article>
    </>
  );
}
