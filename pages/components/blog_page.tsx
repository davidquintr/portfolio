import Head from "next/head";
import blog from '../assets/json/blog_published.json'
import BlogItem from "./blog_item";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <section className="section section-blog">
        <div className="section-title">
            <h2>Blog</h2>
        </div>
        <div className="section-body">
          {
            blog?.map((element, index) => {
              return(
                <BlogItem element={element} index={index} key={index}></BlogItem>
              )
            })
          }                      
        </div>
      </section>
    </>
  );
};

export default BlogPage;
