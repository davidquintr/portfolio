import { Metadata } from "next";
import BoxContent from "../../components/boxContent";
import Project from "../../components/project";
import createPageMetadata from "../../sources/metadata";
import { getDictionary } from "../dictionaries";

export default function Projects({ params: { lang } } : {params: { lang: string}}) {
  const dict = getDictionary(lang)

  return (
    <BoxContent title={dict.projects.title} className="">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dict.projects.list.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              techs={project.techs}
              gallery={project.gallery}
              sourceLink={project.sourceLink}
              moreLink={project.moreLink}
              onlineLink={project.onlineLink}
              index={index}
              moreText={dict.projects.moreText}
              onlineText={dict.projects.onlineText}
              sourceText={dict.projects.sourceText}
            ></Project>
        ))}
      </ul>
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
      title: dict.metadata.projects.title,
      description: dict.metadata.projects.description,
    },
  });
}
