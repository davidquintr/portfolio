import Link from "next/link";
import en from "../sources/en";
import external from "../sources/external";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-dark-gradient-bg py-2.5 px-4 mt-4">
      <p className="text-center">{en.footer.credits}</p>
      <Link
        className="flex gap-1.5 p-1.5 bg-dark-blue-400 items-center rounded-md hover:bg-black transition-all active:scale-95"
        href={external.sourceCode}
        target="_blank"
      >
        <FontAwesomeIcon className="w-4" icon={faGithub} />
        <p>{en.footer.source}</p>
      </Link>
    </footer>
  );
}
