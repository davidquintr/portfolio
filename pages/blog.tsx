import NavBar from "./nav_bar";
import Head from "next/head";
import PageWrapper from "./components/page_wrapper";
import BlogPage from "./components/blog_page";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Contact</title>
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
