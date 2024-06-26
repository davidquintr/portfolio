import Link from "next/link";
import external from "../sources/external";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDictionary } from "../[lang]/dictionaries";

export default function Footer({lang}: {lang: string}) {
  const dict = getDictionary(lang)
  return (
    <footer className="flex flex-col bg-grad-sky dark:bg-grad-night justify-center items-center py-2.5 px-4 lg:px-12 mt-16 gap-1">
      <p className="text-center text-pretty text-light-primary dark:text-dark-blue-100">{dict.footer.credits}</p>
      <Link
        className="flex gap-1.5 items-center justify-center p-1.5 bg-light-blue-100 hover:bg-light-blue-200 dark:hover:bg-dark-blue-700 dark:bg-dark-blue-600 dark:text-dark-blue-100 transition-all rounded-md active:scale-95 text-light-primary"
        href={external.sourceCode}
        target="_blank"
      >
        <FontAwesomeIcon className="size-4" icon={faGithub} />
        <p>{dict.footer.source}</p>
      </Link>
    </footer>
  );
}
