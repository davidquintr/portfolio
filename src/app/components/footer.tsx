import Link from "next/link";
import en from "../sources/en";
import external from "../sources/external";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-light-gradient dark:bg-dark-gradient py-2.5 px-4 mt-8">
      <p className="text-center dark:text-white">{en.footer.credits}</p>
      <Link
        className="flex gap-1.5 p-1.5 bg-light-blue-100 hover:bg-light-blue-200 dark:bg-dark-blue-400 items-center rounded-md dark:hover:bg-black transition-all active:scale-95"
        href={external.sourceCode}
        target="_blank"
      >
        <FontAwesomeIcon className="size-4" icon={faGithub} />
        <p>{en.footer.source}</p>
      </Link>
    </footer>
  );
}
