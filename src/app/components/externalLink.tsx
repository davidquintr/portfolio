import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface IExternalLink {
  link: string;
  icon: IconDefinition;
  text: string;
}

export default function ExternalLink({ link, icon, text }: IExternalLink) {
  return (
    <>
      {link && (
        <Link
          target="_blank"
          href={link}
          className="bg-light-blue-100 hover:bg-light-blue-200 dark:bg-dark-blue-200 flex justify-center items-center py-1 px-2 rounded-md  dark:hover:bg-dark-blue-700 text-light-blue-500 dark:text-dark-blue-100 dark:bg-dark-blue-600 active:scale-95 transition-all gap-1"
        >
          <FontAwesomeIcon
            icon={icon}
            className="size-3"
          />
          <span className="text-xs">
            {text}
          </span>
        </Link>
      )}
    </>
  );
}
