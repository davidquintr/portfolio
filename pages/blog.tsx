import NavBar from "./nav_bar";
import Head from "next/head";
import PageWrapper from "./components/page_wrapper";
import BlogPage from "./components/blog_page";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta property="og:title" content="Portfolio | Blog"></meta>
        <meta property="og:description" content="A blog with explainment, details and code of my projects."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
      </Head>
      <article className="article article-base extended">
        <NavBar></NavBar>
        <PageWrapper>
          <BlogPage></BlogPage>
        </PageWrapper>
      </article>
    </>
  );
}
