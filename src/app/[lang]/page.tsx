import { Metadata } from "next";
import BoxContent from "../components/boxContent";
import DetailItem from "../components/detailItem";
import { MetadataHome } from "../sources/metadata_en";
import TechItem from "../components/tech_item";
import { getDictionary } from "./dictionaries";
import techStack from "../sources/techStack";

export const metadata: Metadata = MetadataHome;

const tech = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const applications = [10, 11, 12, 13, 14];

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
              <TechItem height={16} icon={techStack[el].icon} text={techStack[el].text} key={index} />
            ))}
          </ul>
        </BoxContent>
        <BoxContent
          className="lg:col-span-3 lg:animate-delay-100 animate-delay-100"
          title={dict.home.applications.title}
        >
          <ul className="flex flex-wrap gap-2">
            {applications.map((el, index) => (
              <TechItem height={16} icon={techStack[el].icon} text={techStack[el].text} key={index} />
            ))}
          </ul>
        </BoxContent>
      </article>
    </>
  );
}
