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
        </div>
      </div>
    </BoxContent>
  );
}

export const metadata: Metadata = MetadataContact;
