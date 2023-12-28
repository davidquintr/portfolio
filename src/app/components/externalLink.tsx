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
          className="bg-light-blue-100 hover:bg-light-blue-200 dark:bg-dark-blue-200 w-32 flex justify-center items-center px-2.5 py-2 rounded-lg dark:hover:bg-dark-blue-500 active:scale-95 transition-all gap-1"
        >
          <FontAwesomeIcon
            icon={icon}
            className="size-3.5 text-light-blue-500 dark:text-dark-blue-100"
          />
          <span className="text-[13px] text-light-blue-500 dark:text-dark-blue-100">
            {text}
          </span>
        </Link>
      )}
    </>
  );
}
