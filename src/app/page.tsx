import { Metadata } from "next";
import BoxContent from "./components/boxContent";
import DetailItem from "./components/detailItem";
import en from "./sources/en";
import { MetadataHome } from "./sources/metadata_en";
import tech from "./sources/techStack";
import TechItem from "./components/tech_item";

export const metadata: Metadata = MetadataHome;

const techStack = [
  tech.html,
  tech.css,
  tech.javascript,
  tech.tailwind,
  tech.csharp,
  tech.vuejs,
  tech.react,
  tech.nextjs,
  tech.mysql,
  tech.php,
];

const applications = [
  tech.photoshop,
  tech.illustrator,
  tech.premiere,
  tech.figma,
  tech.azuredevops,
];

export default function Home() {
  return (
    <>
      <article className="flex flex-col lg:grid lg:grid-cols-6 gap-2.5 w-full">
        <BoxContent
          className="animate-delay-200 lg:animate-delay-0 lg:col-span-4"
          title={en.home.about_me.title}
        >
          {en.home.about_me.description.split("\n").map((paragraph, index) => (
            <p
              className="mb-2"
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </BoxContent>
        
        <BoxContent
          className="lg:col-span-2 lg:animate-delay-100 animate-delay-100"
          title={en.home.personal_info.title}
        >
          <DetailItem
            title={en.detail_item.emailText}
            description={en.email}
          />
          <DetailItem
            title={en.detail_item.birthdayText}
            description={en.birthday}
          />
          <DetailItem
            title={en.detail_item.nationality}
            description={en.nationality}
          />
          <DetailItem
            title={en.detail_item.countryText}
            description={en.country}
          />
        </BoxContent>
        <BoxContent
          className="lg:col-span-3 lg:animate-delay-100 animate-delay-100"
          title={en.home.tech_stack.title}
        >
          <ul className="flex flex-wrap gap-2">
            {techStack.map((el, index) => (
              <TechItem height={16} icon={el.icon} text={el.text} key={index} />
            ))}
          </ul>
        </BoxContent>
        <BoxContent
          className="lg:col-span-3 lg:animate-delay-100 animate-delay-100"
          title={en.home.applications.title}
        >
          <ul className="flex flex-wrap gap-2">
            {applications.map((el, index) => (
              <TechItem height={16} icon={el.icon} text={el.text} key={index} />
            ))}
          </ul>
        </BoxContent>
      </article>
    </>
  );
}
