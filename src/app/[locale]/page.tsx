import BoxContent from "../components/boxContent";
import DetailItem from "../components/detailItem";
import en from "../sources/en";
import external from "../sources/external";
import { useTranslations } from "next-intl";
export default function Home() {
  const dictionary = useTranslations();

  return (
    <article className="flex flex-col-reverse lg:grid lg:grid-cols-6 gap-2.5 w-full">
      <BoxContent
        className="lg:col-span-4"
        title={dictionary("home.about_me.title")}
      >
        {dictionary("home.about_me.description")
          .split("\n")
          .map((paragraph, index) => (
            <p
              className="text-light-black dark:text-dark-gray mb-4"
              key={index}
            >
              {paragraph}
            </p>
          ))}
        <span>{}</span>
      </BoxContent>
      <BoxContent
        className="lg:col-span-2 animate-delay-100"
        title={dictionary("home.personal_info.title")}
      >
        <DetailItem
          title={dictionary("detail_item.emailText")}
          description={en.email}
          link={""}
        />
        <DetailItem
          title={dictionary("detail_item.birthdayText")}
          description={en.birthday}
          link={""}
        />
        <DetailItem
          title={dictionary("detail_item.countryText")}
          description={en.country}
          link={""}
        />
        <DetailItem
          title={dictionary("detail_item.cvText")}
          description={""}
          link={`/documents/${external.curriculum}.pdf`}
        />
      </BoxContent>
    </article>
  );
}
