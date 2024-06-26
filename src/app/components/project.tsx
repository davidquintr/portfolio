import Image from "next/image";
import IProject from "../[lang]/types/TypeProject";
import { faEye, faCode, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "./externalLink";
import TechItem from "./tech_item";
import techStack from "../sources/techStack";

export default function Project(project: IProject) {
  const PROJECT_DIRECTORY = "/projects";

  return (
    <li
      style={{ animationDelay: (project.index * 75).toString().concat("ms") }}
      className={`flex animate-fade-right flex-col items-center animate-ease-in-out animate-duration-500 animate-once overflow-hidden pb-1 border-b border-light-blue-100 dark:border-dark-blue-700 rounded-xl`}
    >
      <div className="carousel w-full aspect-video rounded-lg border border-light-blue-200 dark:border-dark-blue-700">
        {project.gallery.map((image, index) => (
          <Image
            className="carousel-item w-full aspect-video scroll snap-always"
            alt={`${project.title} - ${index}`}
            width={480}
            height={270}
            quality={60}
            priority={true}
            key={index}
            src={`${PROJECT_DIRECTORY}${image}`}
          />
        ))}
      </div>
      <div className="flex size-full p-2 flex-col justify-between dark:bg-dark-gradient flex-1">
        <ul className="flex flex-wrap gap-1 mb-1 text-light-blue-600 dark:text-white">
          {project.techs.map((tech, index) => {
            return(
              <TechItem height={10} icon={techStack[tech].icon} text={techStack[tech].text} key={index} />
            )
          })}
        </ul>
        <div className="flex flex-col flex-1 justify-between gap-1">
          <div>
            <h3 className="text-light-blue-500 text-lg dark:text-dark-blue-100 font-bold">
              {project.title}
            </h3>
            <p className="text-light-black dark:text-dark-gray text-xs">
              {project.description}
            </p>
          </div>
        </div>
        <div className="flex gap-1 mt-2">
          <ExternalLink
            icon={faEye}
            link={project.onlineLink}
            text={project.onlineText}
          ></ExternalLink>
          <ExternalLink
            icon={faCode}
            link={project.sourceLink}
            text={project.sourceText}
          ></ExternalLink>
          <ExternalLink
            icon={faAlignLeft}
            link={project.moreLink}
            text={project.moreText}
          ></ExternalLink>
        </div>
      </div>
    </li>
  );
}
