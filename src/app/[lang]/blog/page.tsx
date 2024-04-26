import BoxContent from "../../components/boxContent";
import Post from "../../components/post";
import { getPostMetadata } from "../../utils/postMetaData";
import type { Metadata } from "next";
import { MetadataBlog } from "../../sources/metadata_en";
import { getDictionary } from "../dictionaries";

export default function Blog() {
  const posts = getPostMetadata();
  const en = getDictionary('en')

  return (
    <BoxContent title={en.blog.title} className="">
      <ul className="grid md:grid-cols-2 gap-2">
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

export const metadata: Metadata = MetadataBlog;
