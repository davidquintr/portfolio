import type { Metadata } from "next";
import { MetadataContact } from "../sources/metadata_en";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxContent from "../components/boxContent";
import en from "../sources/en";
import external from "../sources/external";
import Link from "next/link";
import Form from "../components/form";

export default function Contact() {

  return (
    <BoxContent title={en.contact.title} className="">
      <div className="grid md:grid-cols-6 md:mx-10">
        <Form />
        <div className="justify-center md:col-span-2">
          <p className="text-balance text-center my-4 dark:text-dark-gray">
            {en.contact.direct_comm}
          </p>
          <div className="flex justify-center gap-2.5">
            {external.social_media.map((media, index) => (
              <Link
                key={index}
                target="_blank"
                aria-label={media.name}
                href={media.link}
                className="dark:bg-dark-blue-500 dark:hover:bg-dark-blue-200 bg-light-blue-400 flex justify-center items-center p-3 text-white hover:bg-light-blue-500 active:scale-95 transition-all rounded-full"
              >
                <FontAwesomeIcon
                  icon={media.icon}
                  className="size-7"
                  key={index}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BoxContent>
  );
}

export const metadata: Metadata = MetadataContact;
