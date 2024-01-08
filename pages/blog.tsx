import NavBar from "./nav_bar";
import Head from "next/head";
import BlogItem from "./components/blog_item";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Panel from "./components/panel";
import dynamic from "next/dynamic";
import { useConfigContext } from "./components/config_provider";
import Redirect from "./components/redirect";

const blog = require("./assets/json/blog_published.json");
const PageWrapper = dynamic(() => import("./components/page_wrapper"));

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
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""

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
        <meta name="description" content="A blog with explainment, details and code of my projects."></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Portfolio | Blog"></meta>
        <meta property="og:description" content="A blog with explainment, details and code of my projects."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta name="twitter:title" content="Portfolio | Blog"></meta>
        <meta name="twitter:description" content="A blog with explainment, details and code of my projects."></meta>
        <meta name="twitter:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

      </Head>
      <article className="article article-base extended">
        <PageWrapper>
          <Redirect href="blog" />
        </PageWrapper>
      </article>
    </>
  );
}
