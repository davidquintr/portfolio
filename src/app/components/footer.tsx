import Link from "next/link";
import en from "../sources/en";
import external from "../sources/external";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-2.5 px-4 mt-8">
      <p className="text-center text-light-primary">{en.footer.credits}</p>
      <Link
        className="flex gap-1.5 items-center justify-center p-1.5 bg-light-blue-100 hover:bg-light-blue-200 transition-all rounded-md active:scale-95 text-light-primary"
        href={external.sourceCode}
        target="_blank"
      >
        <FontAwesomeIcon className="size-4" icon={faGithub} />
        <p>{en.footer.source}</p>
      </Link>
    </footer>
  );
}
