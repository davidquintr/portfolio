import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import en from "../sources/en";
import Link from "next/link";

interface IdetailItem {
  title: string;
  description: string;
}

export default function DetailItem({ title, description }: IdetailItem) {
  return (
    <div className="flex py-4 px-2 bg-white rounded-md text-lg">
      <h3 className="font-semibold text-light-primary">
        {title}
      </h3>
      {description != "" && (
        <p className="w-full text-right text-light-schema-text">{description}</p>
      )}
    </div>
  );
}
