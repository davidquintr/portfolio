import matter from "gray-matter";
import IBlog from "../types/TypeBlog";
import fs from 'fs'
import readingTime from "reading-time";

export const getPostMetadata = (): IBlog[] => {
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
  