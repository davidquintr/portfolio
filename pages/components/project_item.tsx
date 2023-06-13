import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import TechnologiesSpecific from "./tecnologies_specific";
import project from "../assets/json/projects.json";

type ProjectProps = {
  element: (typeof project)[0];
};

const ProjectsItem: React.FC<ProjectProps> = ({ element }) => {
  return (
    <>
      <div className="project">
        <Image
          className="project-img"
          src={element.img}
          width={960}
          height={540}
          alt="example"
        ></Image>
        <div className="project-info">
          <div className="project-info-details">
            <h3>{element.title}</h3>
            <p>{element.details}</p>
            <div className="project-info-tech">
              <TechnologiesSpecific
                lineTech={element.tech}
              ></TechnologiesSpecific>
            </div>
          </div>
          <div className="project-buttons">
            {element.urlView != "" ? (
              <Link href={element.urlView} className="button-link extended light" target="__blank">
                <FontAwesomeIcon
                  icon={faEye}
                  color="fff"
                  className="fa-sm color-blue"
                />
                <p>Watch online</p>
              </Link>
            ) : null}

            {element.urlCode != "" ? (
              <Link href={element.urlCode} className="button-link extended light" target="__blank">
                <FontAwesomeIcon
                  icon={faCode}
                  color="fff"
                  className="fa-sm color-blue"
                />
                <p>View Source</p>
              </Link>
            ) : null}

            {element.urlDetails != "" ? (
              <Link href={element.urlDetails} className="button-link extended light" target="__blank">
                <FontAwesomeIcon
                  icon={faAlignLeft}
                  color="fff"
                  className="fa-sm color-blue"
                />
                <p>More Info</p>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsItem;
