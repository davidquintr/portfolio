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
    console.error('Error reading file content:', error);
    return {
      notFound: true,
    };
  }
};

const BlogArticle = ({ blogElement }) => {
    // @ts-ignore
    const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
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
          <NavBar></NavBar>
          <PageWrapper>
            <section className="section section-blog">
              <div className="section-body blog-article">
                {isBlog ? (
                  <>
                    <h2>{title}</h2>
                    <div className="blog-details">
                      <Image
                        className="blog-article-image"
                        src={`.${blogElement?.icon}`}
                        alt={title}
                        width={720}
                        height={405}
                      ></Image>
                      <p className="blog-desc">{description}</p>
                      <p>
                        {
                          <DateParsed
                            dateOrigin={blogElement?.date}
                          ></DateParsed>
                        } - David Quintanilla Ruiz
                      </p>
                      <ul className="blog-tag">
                        <Tags tag={blogElement?.tags}></Tags>
                      </ul>
                    </div>
                    <div
                      className="blog-body"
                      dangerouslySetInnerHTML={{
                        __html: content,
                      }}
                    ></div>
                    <div className="blog-info">
                      <div className="blog-social">
                        <div className="post-info-author">
                          <Image
                            src={personal?.photo}
                            alt={personal?.name}
                            width={128}
                            height={128}
                          ></Image>
                          <div className="post-info-author details">
                            <p>{language == "es" ? "Autor" : "Author"}</p>
                            <p className="person">{personal?.name}</p>
                          </div>
                        </div>
                        <div className="blog-share">
                          <p>{language == "es" ? "¡Comparte mi publicación!" :"Share my post!"}</p>
                          <div className="blog-share-buttons">
                            <SocialShare link={URL}></SocialShare>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <h2>{language == "es" ? "Este artículo no existe." : "This article does not exist."}</h2>
                )}
              </div>
            </section>
          </PageWrapper>
        </article>
      </>
    );
  } catch (error) {
    return null
  }
};

export default BlogArticle;
