import BoxContent from "./components/boxContent";
import DetailItem from "./components/detailItem";
import en from "./sources/en";
import external from "./sources/external";

export default function Home() {
  return (
    <article className="grid md:grid-cols-5 gap-2.5 w-full">
      <BoxContent className="md:col-span-3" title={en.home.about_me.title}>
        {en.home.about_me.description.split("\n").map((paragraph, index) => (
          <p className="text-dark-gray mb-4" key={index}>
            {paragraph}
          </p>
        ))}
      </BoxContent>
      <BoxContent className="md:col-span-2" title={en.home.personal_info.title}>
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
