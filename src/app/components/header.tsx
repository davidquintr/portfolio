import Image from "next/image";
import techStack from "../sources/techStack";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const dictionary = useTranslations();
  const showTech = [
    techStack.html,
    techStack.css,
    techStack.javascript,
    techStack.nextjs,
    techStack.php,
    techStack.mysql,
    techStack.tailwind,
  ];

  return (
    <header className="relative max-w-[1360px] w-full mx-auto">
      <div className="flex-col border sm:mx-4 bg-white dark:bg-black border-light-blue-200 dark:border-dark-blue-200 rounded-t-lg p-2.5 sm:p-5 dark:bg-dark-gradient flex justify-center gap-6 min-h-[240px] items-center sm:flex-row">
        <Image
          className="rounded-full"
          src="/davidquint-photo.png"
          quality={20}
          width={200}
          priority={true}
          height={200}
          alt={dictionary("author")}
          title={dictionary("author")}
        />
        <div className="gap-1 text-center flex flex-col justify-center sm:text-left">
          <h1 className="font-bold text-3xl text-light-blue-400 dark:text-dark-blue-100">
            {dictionary("author")}
          </h1>
          <p className="text-light-black dark:text-white">
            {dictionary("role")}
          </p>
        </div>
      </div>
      <div className="sm:mx-4 dark:bg-black bg-light-blue-500 text-white border-light-blue-200 flex gap-2 border dark:bg-dark-gradient border-t-0 dark:border-dark-blue-200 rounded-b-lg p-2.5 px-2.5 flex-wrap justify-center">
        {showTech.map((tech, index) => (
          <tech.icon size="36" key={index} />
        ))}
      </div>
      <Link
        className="absolute top-0 right-0 mt-2 mr-6 text-xs px-2 py-1 bg-dark-blue-500 text-dark-blue-100 hover:bg-dark-blue-200 active:scale-95 transition-all rounded-sm"
        href={dictionary("lang") == "en" ? "/es" : "/en"}
      >
        {dictionary("navigation.switch")}
      </Link>
    </header>
  );
}
