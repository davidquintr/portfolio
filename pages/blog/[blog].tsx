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

const BlogPublished = require("../assets/json/blog_published.json");

export const getStaticPaths: GetStaticPaths = async () => {
  // Obtén la lista de rutas de blogs disponibles a partir de los datos de `BlogPublished`
  const paths = BlogPublished.map((blogItem) => ({
    params: { blog: blogItem.url },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogUrl = params?.blog as string;
  const blogElement = BlogPublished.find((b) => b.url === blogUrl);

  try {
    const filePath = path.join(process.cwd(), blogElement?.details);
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
  const router = useRouter(); 
  const { asPath } = useRouter();
  const [content, setContent] = useState("")
  try {

  useEffect(() => {
    const temporalContent = blogElement?.details;
    setContent(temporalContent)

  }, []);

  useEffect(()=>{
    const allFormat = document.querySelectorAll(".format")
    try{
      allFormat.forEach((element, index) =>{
        Prism.highlightElement(element);
      })

    } catch(exception){}
  },[content])
  
    const isBlog = blogElement != undefined ? true : false;
    const deployUrl = "https://davidquintr.github.io";
    const pathProj = "/portfolio/";
    const URL = `${deployUrl}${pathProj}${asPath}`;

    return (
      <>
        <Head>
          <link rel="shortcut icon" href="../icon.svg"></link>
          <title>{isBlog ? blogElement?.title : "Blog"}</title>
          <meta property="og:title" content={blogElement?.title}></meta>
          <meta
            property="og:description"
            content={blogElement?.description}
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
            content={`Blog - ${isBlog ? blogElement?.title : ""}`}
          ></meta>
          {blogElement?.tags.map((element, index) => {
            return (
              <meta key={index} property="article:tag" content={element}></meta>
            );
          })}
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:title" content={blogElement?.title}></meta>
          <meta
            name="twitter:description"
            content={blogElement?.description}
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
                    <div>
                      <h2>{blogElement?.title}</h2>
                      <p>
                        {
                          <DateParsed
                            dateOrigin={blogElement?.date}
                          ></DateParsed>
                        }
                      </p>
                    </div>
                    <Image
                      className="blog-article-image"
                      src={`.${blogElement?.icon}`}
                      alt={blogElement?.title}
                      width={960}
                      height={540}
                    ></Image>
                    <ul className="blog-tag">
                      <Tags tag={blogElement?.tags}></Tags>
                    </ul>
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
                            <p>Author</p>
                            <p className="person">{personal?.name}</p>
                          </div>
                        </div>
                        <div className="blog-share">
                          <p>Share my post!</p>
                          <div className="blog-share-buttons">
                            <SocialShare link={URL}></SocialShare>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <h2>This article does not exist.</h2>
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
