import { Metadata } from "next";
import BoxContent from "./components/boxContent";
import DetailItem from "./components/detailItem";
import en from "./sources/en";
import external from "./sources/external";
import Image from "next/image";
import { MetadataHome } from "./sources/metadata_en";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = MetadataHome;

export default function Home() {
  return (
    <article className="flex flex-col-reverse lg:grid lg:grid-cols-6 gap-2.5 w-full">
      <BoxContent
        className="animate-delay-200 lg:animate-delay-0 lg:col-span-6"
        title={en.home.about_me.title}
      >
        {en.home.about_me.description.split("\n").map((paragraph, index) => (
          <p className="text-light-black dark:text-dark-gray mb-4" key={index}>
            {paragraph}
          </p>
        ))}
      </BoxContent>
      <BoxContent title={en.home.experience.title} className="col-span-4 animate-delay-100">
        <ul className="flex w-full flex-col gap-1.5 md:flex-row">
          {en.home.experience.list.map((experience, index) => (
            <li
              className="md:w-[50%] px-4 py-2 rounded-md bg-light-gray dark:bg-dark-items flex flex-col"
              key={index}
            >
              <div className="flex gap-2">
                <picture className="bg-white rounded-2xl aspect-[1/1] size-28 grid place-items-center">
                  <Image
                    src={`/experience/${experience.name}.png`}
                    loading="lazy"
                    quality={50}
                    width={64}
                    height={64}
                    alt={experience.name}
                  />
                </picture>
                <figcaption className="flex flex-col gap-0.5">
                  <h2 className="text-light-blue-500 dark:text-dark-blue-100 text-xl font-bold">
                    {experience.position}
                  </h2>
                  <h3 className="text-light-black dark:text-white">{experience.name}</h3>
                  <span className="text-xs">{experience.time}</span>
                  <div className="flex gap-0.5 items-center text-light-shadow dark:text-dark-gray">
                    <FontAwesomeIcon icon={faLocationDot} className="size-3" />
                    <span className="text-xs">{experience.location}</span>
                  </div>
                </figcaption>
              </div>
              <div className="text-dark-gray mt-2 mb-3 text-xs flex-grow">
                {experience.description.split("\n").map((paragraph, index) => (
                  <p
                    className="text-light-black dark:text-dark-gray mb-1 last:mb-0"
                    key={index}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex gap-1 dark:text-dark-gray text-light-shadow">
                {experience.tech?.map((tech, index) => (
                  <tech.icon key={index} className="size-6" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </BoxContent>
      <BoxContent
        className="lg:col-span-2 lg:animate-delay-100 animate-delay-100"
        title={en.home.personal_info.title}
      >
        <DetailItem
          title={en.detail_item.emailText}
          description={en.email}
          link={""}
        />
        <DetailItem
          title={en.detail_item.birthdayText}
          description={en.birthday}
          link={""}
        />
        <DetailItem
          title={en.detail_item.countryText}
          description={en.country}
          link={""}
        />
        <DetailItem
          title={en.detail_item.cvText}
          description={""}
          link={`/documents/${external.curriculum}.pdf`}
        />
      </BoxContent>
    </article>
  );
}
