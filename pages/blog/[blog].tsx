import { useRouter } from "next/router";
import PageWrapper from "../components/page_wrapper";
import NavBar from "../nav_bar";
import Head from "next/head";
import BlogPublished from '../assets/json/blog_published.json'
import Image from "next/image";


const BlogArticle = () => {

    const router = useRouter()
    const blog = router.query.blog
    const blogElement = BlogPublished.find(b => b.url == blog)

    const isBlog = blogElement != undefined ? true : false

  return (
    <>
      <Head>
        <title>{isBlog ? blogElement.title : "Blog"}</title>
      </Head>
      <article className="article article-base extended">
        <NavBar></NavBar>
        <PageWrapper>
          <section className="section section-blog">
            <div className="section-body blog-article">
                <div>
                    <h2>{blogElement.title}</h2>
                    <p>{blogElement.date}</p>
                </div>
                <Image className="blog-article-image" src={blogElement.icon} alt={blogElement.title} width={960} height={540}></Image>
                <div className="blog-body" dangerouslySetInnerHTML={{ __html: blogElement?.details }}></div>
                
            </div>
          </section>
        </PageWrapper>
      </article>
    </>
  );
};

export default BlogArticle;
