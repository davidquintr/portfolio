import blog from '../assets/json/blog_published.json'
import BlogItem from "./blog_item";
import { useRouter } from 'next/router';

const BlogPage = () => {
  const router = useRouter();
  const { query } = router;
  const { article } = query;

  if (article) {
    const currentArticle = blog.find(item => item.url === `blog/${article}`);

    if (currentArticle) {
      return (
        <div>
          <h2>{currentArticle.title}</h2>
          <p>{currentArticle.details}</p>
        </div>
      );
    } else {
      return <div>No se encontró el artículo</div>;
    }
  }


  return (
    <>
      <section className="section section-blog">
        <div className="section-title">
            <h2>Blog</h2>
        </div>
        <div className="section-body">
          {
            blog?.map((element, index) => {
              return(
                <BlogItem element={element} key={index} index={index}></BlogItem>
              )
            })
          }                      
        </div>
      </section>
    </>
  );
};

export default BlogPage;
