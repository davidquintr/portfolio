import NavBar from "./nav_bar";
import Head from "next/head";
import PageWrapper from "./components/page_wrapper";
import BlogItem from "./components/blog_item";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Panel from "./components/panel";

const blog = require("./assets/json/blog_published.json");

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      blog,
    },
  };
};

export default function Blog() {
  const [articlesBlog, setArticlesBlog] = useState([]);
  const [filters, setFilters] = useState([])

  const collectFilters = () =>{
    let collectedTags = []

    blog.forEach((element, index)=>{
      collectedTags.push(...element.tags)
    })

    setFilters(collectedTags.filter((element, index)=> collectedTags.indexOf(element) === index))
  }
  
  useEffect(() => {
    
    let orderBlog = blog.sort((a, b) =>
      a.date.localeCompare(b.date, undefined, { sensitivity: "base" })
    );
    setArticlesBlog(orderBlog.reverse());
    collectFilters();
  }, []);
  

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
            <Panel isProject={false} pureArray={blog} setElement={setArticlesBlog} element={articlesBlog} pureFilter={filters} />
            <div className="section-body">
              {articlesBlog?.map((element, index) => {
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
