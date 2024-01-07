import Link from "next/link";
import IBlog from "../types/TypeBlog";
import Image from "next/image";
import date from "../utils/date";

interface IPost {
  post: IBlog
  index: number
}


export default function Post({post, index} : IPost) {
  const BLOG_PATH = "/blog";
  const IMG_EXT = ".png";
  const dateFormated = date({ dateTarget: post.date, language: "en" });

  return (
    <li
    style={{ animationDelay: (index * 75).toString().concat("ms") }}
         className="dark:bg-dark-gradient mt-2 animate-fade-right animate-ease-in-out animate-duration-500 animate-once border-2 rounded-lg dark:border-dark-blue-200 bg-light-gray border-light-blue-400 dark:bg-black hover:brightness-95 active:brightness-105 dark:hover:bg-dark-blue-200 transition-all dark:active:bg-dark-blue-100 duration-[400ms]">
      <Link className="block h-full pb-3.5" href={`${BLOG_PATH}/${post.slug}`}>
        <Image
          className="aspect-video rounded-md drop-shadow-xl -mt-4 scale-95"
          alt={post.slug}
          src={`${BLOG_PATH}/${post.slug}${IMG_EXT}`}
          width={800}
          height={450}
        />
        <div className="pt-1 px-3">
          <div className="flex justify-between font-medium text-xs text-light-black dark:text-dark-gray">
            <p className="text-sm font-semibold">{dateFormated}</p>
            <p>{post.stats.text}</p>
          </div>
          <div className="flex gap-[5px] flex-wrap py-2">
            {post.tags.map((tag, index) => (
              <span
                className="px-2.5 py-[5px] bg-white rounded-lg text-black text-[10px]"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-light-blue-500 dark:text-dark-blue-100 text-2xl font-bold pb-2">
            {post.title}
          </h2>
          <p className="text-light-black dark:text-dark-gray text-xs">{post.description}</p>
        </div>
      </Link>
    </li>
  );
}
