import type { Metadata } from "next";
import { MetadataContact } from "../sources/metadata_en";
import BoxContent from "../components/boxContent";
import en from "../sources/en";
import Form from "../components/form";
import external from "../sources/external";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {

  return (
    <BoxContent title={en.contact.title} className="">
      <div className="grid md:grid-cols-7 gap-8">
        <Form />
        <div className="flex flex-col justify-center md:col-span-3">
          <p className="font-medium dark:text-white text-2xl mb-2">
            {en.contact.cta}
          </p>
          <div>
            <p>{en.contact.share_my}</p>
            <div className="flex gap-1">
              {external.social_api.map((media, index) => (
                <Link
                  target="_blank"
                  aria-label={media.name}
                  href={`${media.url}${external.domain}`}
                  key={index}
                  className="flex gap-1 items-center bg-light-blue-100 px-1.5 py-1 rounded-md dark:bg-dark-blue-600 dark:hover:bg-dark-blue-700 dark:text-light-blue-100 hover:bg-light-blue-200 transition-all text-light-primary active:scale-95"
                >
                  <FontAwesomeIcon
                    icon={media.icon}
                    className="size-4"
                    key={index}
                  />
                  <p>Share</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BoxContent>
  );
}

export const metadata: Metadata = MetadataContact;
