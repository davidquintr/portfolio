import Link from "next/link";
import { getDictionary } from "../[lang]/dictionaries";

interface Props {
  lang : string
  type : string
}

export default function NotFoundCat({lang, type}: Props) {
  const dict = getDictionary(lang)
  const context = type == 'blog' ? dict.not_found.blog : dict.not_found.pages

  return (
    <section className="flex justify-center items-center flex-1">
      <div className="flex flex-col items-center justify-center md:flex-row max-w-[70%] mx-auto gap-3">
        <div className="h-60 bg-no-repeat bg-center bg-contain w-40 bg-[url(/shh_light.webp)] dark:bg-[url(/shh_dark.webp)]"></div>
        <div className="flex flex-col items-center gap-8 md:items-start justify-center text-light-blue-500 text-left dark:text-dark-gray ">
          <div>
            <p className="text-3xl dark:text-dark-blue-100 max-w-56 text-center">{dict.not_found.joke}</p>
            <p className="text-9xl leading-[0.7] font-bold dark:text-dark-blue-400">404</p>
          </div>
          <Link className="px-8 w-full text-center py-2 rounded-lg dark:bg-dark-blue-700 dark:hover:bg-dark-blue-650 dark:text-dark-blue-200 bg-dark-blue-200 active:scale-95 hover:bg-dark-blue-500 transition-all" href={context.link}>{context.text}</Link>
        </div>
      </div>
    </section>
  );
}