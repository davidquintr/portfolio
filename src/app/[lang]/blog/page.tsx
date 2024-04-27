import BoxContent from "../../components/boxContent";
import Post from "../../components/post";
import { getPostMetadata } from "../../utils/postMetaData";
import type { Metadata } from "next";
import createPageMetadata from "../../sources/metadata";
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

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = getDictionary(lang);

  return createPageMetadata({
    title: dict.metadata.title,
    thumbnail: dict.metadata.thumbnail,
    page: {
      title: dict.metadata.blog.title,
      description: dict.metadata.blog.description,
    },
  });
}
