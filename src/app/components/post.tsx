import Link from "next/link";
import IBlog from "../[lang]/types/TypeBlog";
import Image from "next/image";
import date from "../utils/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

interface IPost {
  post: IBlog;
  index: number;
}

export default function Post({ post, index }: IPost) {
  const BLOG_PATH = "/blog";
  const IMG_EXT = ".png";
  const dateFormated = date({ dateTarget: post.date, language: "en" });

  return (
    <li
      style={{ animationDelay: (index * 75).toString().concat("ms") }}
      className="group bg-light-blue-100 hover:bg-light-blue-200 dark:bg-dark-blue-600 py-3 pl-3 pr-4  rounded-md dark:hover:bg-dark-blue-700 animate-fade-right animate-ease-in-out animate-duration-500 animate-once duration-[400ms] delay-[50ms]"
    >
      <Link className="flex group-active:scale-95 transition-transform items-center" href={`/post/${post.slug}`}>
        <div className="relative flex-1 flex gap-2 items-center overflow-hidden">
          <Image
            className="z-20 aspect-video rounded-md drop-shado w-xl object-center h-full w-auto absolute translate-x-[-125%] group-hover:translate-x-0 transition-all duration-500"
            alt={post.slug}
            src={`${BLOG_PATH}/${post.slug}${IMG_EXT}`}
            priority={true}
            quality={60}
            width={800}
            height={450}
          />
          <div className="text-light-primary dark:text-dark-blue-300 group-hover:opacity-50 transition-all">
            <div className="flex font-medium text-xs gap-2.5 items-center">
              <p className="font-semibold">{dateFormated}</p>
              <p>{post.stats.text}</p>
            </div>
            <h3 className="font-bold text-lg">{post.title}</h3>
            <ul className="flex gap-0.5 py-0.5 flex-wrap">
              {post.tags.map((tag, index) => (
                <li
                  className="px-1.5 py-1 bg-white dark:bg-dark-background/35 dark:text-dark-gray-100 rounded-[2px] text-black text-xs"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p className="line-clamp-1 text-sm">{post.description}</p>
          </div>
        </div>
        <FontAwesomeIcon className="h-3 transition-transform group-hover:translate-x-2" icon={faChevronRight} />
      </Link>
    </li>
  );
}