import BoxContent from "@/app/components/boxContent";
import en from "@/app/sources/en";
import external from "@/app/sources/external";
import { PostMetadata } from "@/app/sources/post_metadata";
import IBlog from "@/app/types/TypeBlog";
import date from "@/app/utils/date";
import { getPostMetadata } from "@/app/utils/postMetaData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

let slug = '';

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const formated = matter(content);
  return formated;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function BlogPage(props: any) {
  slug = props.params.slug;
  const BLOG_PATH = "/blog";
  const POST_PATH = "post"
  const IMG_EXT = ".png";
  const post = getPostContent(slug);
  const dateFormated = date({
    dateTarget: new Date(post.data.date),
    language: "en",
  });

  return (
    <BoxContent title="" className="">
      <div className="flex flex-col-reverse xl:flex-row md:px-8 gap-4 my-4">
        <div className="flex flex-col gap-1 flex-1 animate-fade-right animate-ease-in-out animate-duration-500 animate-delay-100 xl:animate-delay-0 animate-once">
          <div className="flex flex-col gap-1.5 text-light-black dark:text-dark-gray">
            <div className="flex flex-wrap gap-1">
              {post.data.tags.map((tag: any, index: any) => (
                <span
                  className="px-2.5 py-[5px] bg-light-gray rounded-lg text-black text-xs dark:bg-white"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-bold text-4xl text-light-blue-600 dark:text-dark-blue-100">{post.data.title}</h1>
            <p className="pt-1">{post.data.description}</p>
            <p className="text-xs">{dateFormated}</p>
          </div>
          <div className="flex flex-col justify-center sm:justify-around gap-2 py-3 mt-auto sm:flex-row dark:bg-dark-items rounded-lg bg-light-gray">
            <div className="flex justify-center sm:justify-normal items-center gap-2">
              <Image
                className="rounded-full"
                src="/davidquint-photo.png"
                quality={20}
                width={52}
                priority={true}
                height={52}
                alt={en.author}
                title={en.author}
              />
              <div className="dark:text-dark-gray">
                <span className="font-bold">{en.post.author}</span>
                <p>{en.author}</p>
              </div>
            </div>
            <div className="dark:text-dark-gray">
              <p className="text-center font-semibold pb-1">{en.post.share}</p>
              <div className="flex gap-3 justify-center">
                {external.social_api.map((media, index) => (
                  <Link
                    target="_blank"
                    aria-label={media.name}
                    href={`${media.url}${external.domain}${POST_PATH}/${slug}`}
                    key={index}
                    className="dark:bg-dark-blue-500 dark:hover:bg-dark-blue-200 bg-light-blue-400 flex justify-center items-center p-3 text-white hover:bg-light-blue-500 active:scale-95 transition-all rounded-full"
                  >
                    <FontAwesomeIcon
                      icon={media.icon}
                      className="size-7"
                      key={index}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <picture className="xl:max-w-[50%] animate-fade-right animate-ease-in-out animate-duration-500 animate-delay-0 xl:animate-delay-100 animate-once">
          <Image
            className="aspect-video rounded-md drop-shadow-xl mx-auto"
            alt=""
            src={`${BLOG_PATH}/${slug}${IMG_EXT}`}
            width={800}
            height={450}
            priority={true}
          />
        </picture>
      </div>
      <span className="block h-[1px] bg-light-border-gradient dark:bg-dark-border-gradient my-4"></span>
      <article className="prose max-w-max dark:prose-a:text-white prose-li:my-0.5 prose-headings:text-light-blue-500 dark:prose-headings:text-dark-blue-100 prose-img:rounded-lg prose-video:rounded-lg dark:*:text-dark-gray">
        {<Markdown>{post.content}</Markdown>}
      </article>
    </BoxContent>
  );
}

type genMetadata = {
  params: {slug: string}
}
 
export async function generateMetadata ({params}: genMetadata){
  const slug = params.slug;
  return PostMetadata(slug);
}