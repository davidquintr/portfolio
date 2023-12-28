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
    <div className="bg-dark-items rounded-lg flex mb-1.5 h-12  items-center justify-between px-2.5 border-dark-blue-200 border-b">
      <h2 className="text-dark-blue-100 font-bold">{title}</h2>
      {description != "" && <p>{description}</p>}
      {link != "" && (
        <Link
          className="flex items-center gap-1 transition-all bg-dark-blue-500 py-2 px-3 rounded-full hover:bg-dark-blue-200 active:scale-95"
          href={link}
          target="_blank"
        >
          <FontAwesomeIcon icon={faEye} className="size-5 text-dark-blue-100" />
          <span className="text-dark-blue-100">{en.detail_item.open}</span>
        </Link>
      )}
    </div>
  );
}
