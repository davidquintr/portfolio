import BoxContent from "../components/boxContent";
import Project from "../components/project";
import en from "../sources/en";

export default function Projects() {
  return (
    <BoxContent title={en.projects.title} className="">
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {Object.keys(en.projects.list).map((projectKey, index) => {
          const project =
            en.projects.list[projectKey as keyof typeof en.projects.list];
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              techs={project.techs}
              gallery={project.gallery}
              sourceLink={project.sourceLink}
              moreLink={project.moreLink}
              onlineLink={project.onlineLink}
            ></Project>
          );
        })}
      </ul>
    </BoxContent>
  );
}
