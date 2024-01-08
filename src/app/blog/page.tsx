import BoxContent from "../components/boxContent";
import en from "../sources/en";
import Post from "../components/post";
import { getPostMetadata } from "../utils/postMetaData";

export default function Blog() {
  const posts = getPostMetadata();
  return (
    <BoxContent title={en.blog.title} className="">
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Post
            key={index}
            index={index}
            post={post}
          />
        ))}
      </ul>
    </BoxContent>
  );
}
