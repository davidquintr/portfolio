import { Metadata } from "next";
import BoxContent from "../components/boxContent";
import DetailItem from "../components/detailItem";
import TechItem from "../components/tech_item";
import createPageMetadata from "../sources/metadata";
import { getDictionary } from "./dictionaries";
import techStack from "../sources/techStack";
import Script from "next/script";
import schema from "../sources/schema";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = getDictionary(lang);

  return createPageMetadata({
    title: dict.metadata.title,
    thumbnail: dict.metadata.thumbnail,
    page: {
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
    },
  });
}

const tech = [0, 1, 2, 23, 3, 13, 6, 7, 24, 5, 19];

const applications = [8, 9, 10, 11, 12];

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = getDictionary(lang);
  return (
    <>
      <article className="flex flex-col lg:grid lg:grid-cols-6 gap-2.5 sm:gap-6 w-full">
        <BoxContent
          className="animate-delay-200 lg:animate-delay-0 lg:col-span-4"
          title={dict.home.about_me.title}
        >
          {dict.home.about_me.description
            .split("\n")
            .map((paragraph, index) => (
              <p className="mb-2" key={index}>
                {paragraph}
              </p>
            ))}
        </BoxContent>

        <BoxContent
          className="lg:col-span-2 lg:animate-delay-100 animate-delay-100"
          title={dict.home.personal_info.title}
        >
          <DetailItem
            title={dict.detail_item.emailText}
            description={dict.email}
          />
          <DetailItem
            title={dict.detail_item.birthdayText}
            description={dict.birthday}
          />
          <DetailItem
            title={dict.detail_item.nationality}
            description={dict.nationality}
          />
          <DetailItem
            title={dict.detail_item.countryText}
            description={dict.country}
          />
        </BoxContent>
        <BoxContent
          className="lg:col-span-3 lg:animate-delay-100 animate-delay-100"
          title={dict.home.tech_stack.title}
        >
          <ul className="flex flex-wrap gap-2">
            {tech.map((el, index) => (
              <TechItem
                height={16}
                icon={techStack[el].icon}
                text={techStack[el].text}
                key={index}
              />
            ))}
          </ul>
        </BoxContent>
        <BoxContent
          className="lg:col-span-3 lg:animate-delay-100 animate-delay-100"
          title={dict.home.applications.title}
        >
          <ul className="flex flex-wrap gap-2">
            {applications.map((el, index) => (
              <TechItem
                height={16}
                icon={techStack[el].icon}
                text={techStack[el].text}
                key={index}
              />
            ))}
          </ul>
        </BoxContent>
      </article>
      <Script type="application/ld+json" id="schema-org" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}></Script>
    </>
  );
}
