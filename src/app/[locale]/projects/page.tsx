import en from "@/app/sources/en";
import es from "@/app/sources/es";
import BoxContent from "../../components/boxContent";
import Project from "../../components/project";
import { useTranslations } from "next-intl";
import IDictionary from "@/app/types/TypeDictionary";

export default function Projects() {
  const t = useTranslations();
  const dictionary: IDictionary = t("lang") == "en" ? en : es;

  const ExternalLinkText: IExternalLinkText = {
    onlineText: dictionary.projects.onlineText,
    sourceText: dictionary.projects.sourceText,
    moreText: dictionary.projects.moreText,
  };

  return (
    <BoxContent title={t("projects.title")} className="">
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {Object.keys(dictionary.projects.list).map((projectKey, index) => {
          const project =
            dictionary.projects.list[
              projectKey as keyof typeof dictionary.projects.list
            ];
          return (
            <Project
              key={index}
              project={project}
              externalLinkText={ExternalLinkText}
              index={index}
            ></Project>
          );
        })}
      </ul>
    </BoxContent>
  );
}
