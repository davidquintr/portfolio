import projects from '../assets/json/projects_en.json'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode, faAlignLeft } from "@fortawesome/free-solid-svg-icons";


type ProjectLinkProps = {
    element : typeof projects[0]
  };

const ProjectLinkElement: React.FC<ProjectLinkProps> = (element) =>{

    return(
        <>
        {element?.element.urlView != "" ? (
              <Link href={element?.element.urlView} className="button-link extended light" target="__blank">
                <FontAwesomeIcon
                  icon={faEye}
                  color="fff"
                  className="fa-sm color-blue"
                />
                <p>Watch online</p>
              </Link>
            ) : null}

            {element?.element.urlCode != "" ? (
              <Link href={element?.element.urlCode} className="button-link extended light" target="__blank">
                <FontAwesomeIcon
                  icon={faCode}
                  color="fff"
                  className="fa-sm color-blue"
                />
                <p>View Source</p>
              </Link>
            ) : null}

            {element?.element.urlDetails != "" ? (
              <Link href={element?.element.urlDetails} className="button-link extended light" target="__blank">
                <FontAwesomeIcon
                  icon={faAlignLeft}
                  color="fff"
                  className="fa-sm color-blue"
                />
                <p>More Info</p>
              </Link>
            ) : null}
        </>
    )

}

export default ProjectLinkElement