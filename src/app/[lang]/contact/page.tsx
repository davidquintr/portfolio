import type { Metadata } from "next";
import BoxContent from "../../components/boxContent";
import Form from "../../components/form";
import external from "../../sources/external";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDictionary } from "../dictionaries";
import createPageMetadata from "@/app/sources/metadata";

export default function Contact({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = getDictionary(lang);

  return (
    <BoxContent title={dict.contact.title} className="">
      <div className="flex flex-col-reverse md:grid md:grid-cols-7 gap-8 text-center md:text-left">
        <Form lang={lang} />
        <div className="flex flex-col justify-center md:col-span-3">
          <p className="font-medium text-pretty dark:text-white text-2xl mb-2">
            {dict.contact.cta}
          </p>
          <div>
            <p>{dict.contact.share_my}</p>
            <div className="flex gap-1 justify-center md:justify-start">
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
                  <p>{dict.contact.share}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BoxContent>
  );
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = getDictionary(lang);

  return createPageMetadata({
    title: dict.metadata.type,
    thumbnail: dict.metadata.thumbnail,
    page: {
      title: dict.metadata.contact.title,
      description: dict.metadata.contact.description,
    },
  });
}
