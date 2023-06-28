import blog from '../assets/json/blog_published.json'
import BlogItem from "./blog_item";
import { useRouter } from 'next/router';

const BlogPage = () => {
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
