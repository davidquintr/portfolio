import BoxContent from "../components/boxContent";
import en from "../sources/en";
import fs from "fs";
import matter from "gray-matter";
import IBlog from "../types/TypeBlog";
import Post from "../components/post";
import readingTime from "reading-time";

const getPostMetadata = (): IBlog[] => {
  const MARKDOWN_EXT = ".md";
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const mdPosts = files.filter((file) => file.endsWith(MARKDOWN_EXT));

  const posts = mdPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: new Date(matterResult.data.date),
      slug: fileName.replace(MARKDOWN_EXT, ""),
      stats: readingTime(matterResult.content),
      tags: matterResult.data.tags,
    };
  });
  return posts;
};

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
