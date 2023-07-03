import NavBar from "./nav_bar";
import Head from "next/head";
import PageWrapper from "./components/page_wrapper";
import BlogItem from "./components/blog_item";
import { GetStaticProps } from "next";

const blog = require("./assets/json/blog_published.json");

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      blog,
    },
  };
};

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta property="og:title" content="Portfolio | Blog"></meta>
        <meta
          property="og:description"
          content="A blog with explainment, details and code of my projects."
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
          <section className="section section-blog">
            <div className="section-title">
              <h2>Blog</h2>
            </div>
            <div className="section-body">
              {blog?.map((element, index) => {
                return (
                  <BlogItem
                    element={element}
                    key={index}
                    index={index}
                  ></BlogItem>
                );
              })}
            </div>
          </section>
        </PageWrapper>
      </article>
    </>
  );
}
