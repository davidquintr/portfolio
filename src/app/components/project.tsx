import Image from "next/image";
import IProject from "../types/TypeProject";
import en from "../sources/en";
import { faEye, faCode, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "./externalLink";

export default function Project(project: IProject) {
  const PROJECT_DIRECTORY = "/projects";

  return (
    <li
      style={{ animationDelay: (project.index * 50).toString().concat("ms") }}
      className={`flex animate-fade-right animate-ease-in-out animate-duration-500 animate-once flex-col rounded-lg overflow-hidden bg-light-gray border-light-blue-400 dark:bg-black border-2 dark:border-dark-blue-200`}
    >
      <div className="carousel">
        {project.gallery.map((image, index) => (
          <Image
            className="w-full carousel-item aspect-video scroll snap-always"
            alt={`${project.title} - ${index}`}
            width={480}
            height={270}
            key={index}
            src={`${PROJECT_DIRECTORY}${image}`}
          />
        ))}
      </div>
      <div className="flex flex-col justify-between dark:bg-dark-gradient flex-1 py-2.5 px-5">
        <div className="flex gap-1 my-3.5 text-light-blue-600 dark:text-white">
          {project.techs.map((tech, index) => (
            <tech.icon size="36" key={index} />
          ))}
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <h2 className="text-light-blue-500 dark:text-dark-blue-100 font-bold text-3xl my-2">
              {project.title}
            </h2>
            <p className="text-light-black dark:text-dark-gray">
              {project.description}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-1 mt-6">
          <ExternalLink
            icon={faEye}
            link={project.onlineLink}
            text={en.projects.onlineText}
          ></ExternalLink>
          <ExternalLink
            icon={faCode}
            link={project.sourceLink}
            text={en.projects.sourceText}
          ></ExternalLink>
          <ExternalLink
            icon={faAlignLeft}
            link={project.moreLink}
            text={en.projects.moreText}
          ></ExternalLink>
        </div>
      </div>
    </li>
  );
}
