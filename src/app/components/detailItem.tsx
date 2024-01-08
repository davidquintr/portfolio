import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import en from "../sources/en";
import Link from "next/link";

interface IdetailItem {
  title: string;
  description: string;
  link: string;
}

export default function DetailItem({ title, description, link }: IdetailItem) {
  return (
    <div className="bg-light-gray dark:bg-dark-items rounded-lg flex mb-1.5 h-12  items-center justify-between px-2.5 border-light-blue-200 dark:border-dark-blue-200 border-b">
      <h2 className="text-light-blue-500 dark:text-dark-blue-100 font-bold">
        {title}
      </h2>
      {description != "" && (
        <p className="dark:text-white text-light-black">{description}</p>
      )}
      {link != "" && (
        <a
          className="flex items-center gap-1 transition-all dark:bg-dark-blue-500 py-2 px-3 rounded-full dark:hover:bg-dark-blue-200 active:scale-95 text-light-blue-500 bg-light-blue-100 hover:bg-light-blue-200 dark:text-dark-blue-100"
          href={link}
          target="_blank"
        >
          <FontAwesomeIcon icon={faEye} className="size-5" />
          <span>{en.detail_item.open}</span>
        </a>
      )}
    </div>
  );
}
