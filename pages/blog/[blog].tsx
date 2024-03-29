import { useRouter } from "next/router";
import PageWrapper from "../components/page_wrapper";
import NavBar from "../nav_bar";
import Head from "next/head";
import Image from "next/image";
import DateParsed from "../components/date";
import personal from "../assets/json/personal.json";
import Tags from "../components/tags";
import SocialShare from "../components/social_share";
import { GetStaticProps, GetStaticPaths } from "next";
import Prism from 'prismjs';
import fs from 'fs';
import path from 'path';
import { useEffect, useState } from "react";
import { useConfigContext } from "../components/config_provider";
import Redirect from "../components/redirect";

const BlogPublished = require("../assets/json/blog_published.json");
  // @ts-ignore

  export const getStaticPaths: GetStaticPaths = async () => {
    const paths = BlogPublished.reduce((allPaths, blogItem) => {
      const blogUrlEs = blogItem.url.es as string; // Ruta en español
      const blogUrlEng = blogItem.url.eng as string; // Ruta en inglés
      const paths = [
        ...allPaths,
        { params: { blog: blogUrlEs } },
        { params: { blog: blogUrlEng } },
      ];
      return paths;
    }, []);
  
    return {
      paths,
      fallback: false,
    };
  };
  

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogUrl = params?.blog as string;
  const blogElement = BlogPublished.find((b) => b.url.eng === blogUrl || b.url.es === blogUrl);
  const isSpanish = blogUrl.includes("-es")

  try {
    const filePath = path.join(process.cwd(), `./pages/assets/json/blog/${isSpanish ? blogElement?.details.es : blogElement?.details.eng}`);
    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    
    
    return {
      props: {
        blogElement: {
          ...blogElement,
          details: fileContent,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const BlogArticle = ({ blogElement }) => {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""

  const router = useRouter(); 
  const { asPath } = useRouter();
  const [content, setContent] = useState("")

  useEffect(() => {
    const temporalContent = blogElement?.details;
    setContent(temporalContent)

  }, [blogElement?.details]);

  useEffect(()=>{
    const allFormat = document.querySelectorAll(".format")
    
    allFormat.forEach((element, index) =>{
      Prism.highlightElement(element);
    })

  },[content])
  
  try {
    const isBlog = blogElement != undefined ? true : false;
    const deployUrl = "https://davidquintr.github.io";
    const pathProj = "/portfolio/";
    const URL = `${deployUrl}${pathProj}${asPath}`;
    const title = language == "es" ? blogElement?.title.es : blogElement?.title.eng
    const description = language == "es" ? blogElement?.description.es : blogElement?.description.eng

    return (
      <>
        <Head>
          <link rel="shortcut icon" href="../icon.svg"></link>
          <title>{isBlog ? title : "Blog"}</title>
          <meta property="og:title" content={title}></meta>
          <meta
            property="og:description"
            content={description}
          ></meta>
          <meta
            property="og:image"
            content={`${deployUrl}/portfolio/${blogElement?.thumbnail?.replace(
              "./",
              ""
            )}`}
          ></meta>
          <meta property="og:url" content={URL}></meta>
          <meta
            property="article:section"
            content={`Blog - ${isBlog ? title : ""}`}
          ></meta>
          {blogElement?.tags.map((element, index) => {
            return (
              <meta key={index} property="article:tag" content={element}></meta>
            );
          })}
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:title" content={title}></meta>
          <meta
            name="twitter:description"
            content={description}
          ></meta>
          <meta
            property="twitter:image"
            content={`${deployUrl}/portfolio/${blogElement?.thumbnail?.replace(
              "./",
              ""
            )}`}
          ></meta>
        </Head>
        <article className="article article-base extended">
          <PageWrapper>
            <Redirect href={`post/${blogElement?.url.eng}`} />
          </PageWrapper>
        </article>
      </>
    );
  } catch (error) {
    return null
  }
};

export default BlogArticle;
