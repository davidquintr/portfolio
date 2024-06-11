import { getDictionary } from "@/app/[lang]/dictionaries";
import BoxContent from "@/app/components/boxContent";
import external from "@/app/sources/external";
import { PostMetadata } from "@/app/sources/post_metadata";
import date from "@/app/utils/date";
import { getPostMetadata } from "@/app/utils/postMetaData";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

let slug = '';
const en = getDictionary('en')

const getPostContent = (slug: string) => {
  let formated : any
  try {
    const folder = "posts/";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const formated = matter(content);
    return formated;
  } catch (err) {
    return formated
  }
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
  let post : matter.GrayMatterFile<string>

  try {
    post = getPostContent(slug);
  } catch(err) {
    console.log("not-found")
    notFound();
  }

  if(!post){
    notFound();
  }

  const dateFormated = date({
    dateTarget: new Date(post.data.date),
    language: "en",
  });

  return (
    <BoxContent title="" className="">
      <Link href="/blog" className="inline-flex mt-4 items-center gap-2 px-4 lg:px-12 py-2 rounded-md bg-light-blue-150 text-light-primary hover:bg-light-blue-200 active:scale-95 dark:bg-dark-blue-600 dark:hover:bg-dark-blue-700 dark:text-dark-blue-100 transition-all">
        <FontAwesomeIcon icon={faAnglesLeft} className="size-3" />
        <span>Back to Blog Posts</span>
      </Link>
      <div className="flex flex-col xl:flex-row gap-4 my-4">
        <picture className="xl:max-w-[50%] animate-fade-right animate-ease-in-out animate-duration-500 animate-delay-0 xl:animate-delay-100 animate-once">
            <Image
              className="aspect-video rounded-md border border- border-light-blue-200 dark:border-dark-blue-500 drop-shadow-xl mx-auto"
              alt=""
              src={`${BLOG_PATH}/${slug}${IMG_EXT}`}
              width={800}
              height={450}
              priority={true}
            />
          </picture>
        <div className="flex flex-col gap-1 flex-1 animate-fade-right animate-ease-in-out animate-duration-500 animate-delay-100 xl:animate-delay-0 animate-once">
          <div className="flex flex-col gap-1.5 text-light-black dark:text-dark-gray">
            <ul className="flex flex-wrap gap-1">
              {post.data.tags.map((tag: any, index: any) => (
                <li
                  className="px-2.5 py-[5px] bg-light-gray rounded-[4px] text-black text-xs bg-white dark:bg-dark-blue-700/35 dark:text-dark-gray-100"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
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
                    className="flex gap-1 items-center bg-light-blue-100 px-1.5 py-1 rounded-md dark:bg-dark-blue-600 dark:hover:bg-dark-blue-700 dark:text-light-blue-100 hover:bg-light-blue-200 transition-all text-light-primary active:scale-95"
                  >
                    <FontAwesomeIcon
                      icon={media.icon}
                      className="size-4"
                      key={index}
                    />
                    <p>Share</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <article className="prose max-w-max dark:prose-a:text-white prose-li:my-0.5 prose-headings:text-light-primary dark:prose-headings:text-dark-blue-100 prose-img:rounded-lg prose-video:rounded-lg *:accent-light-blue-400  dark:*:accent-dark-blue-100 dark:*:text-dark-gray">
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

