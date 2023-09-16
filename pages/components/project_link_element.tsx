import projects from '../assets/json/projects_en.json'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { useConfigContext } from "./config_provider";


type ProjectLinkProps = {
    element : typeof projects[0]
  };

const ProjectLinkElement: React.FC<ProjectLinkProps> = (element) =>{
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""
  
  let translate = {
    online: language == "es" ? "Ver en línea": "Watch online",
    source: language == "es" ? "Ver código": "View Source",
    info: language == "es" ? "Más Info": "More Info",
  }

    return(
        <>
        {element?.element?.urlView != "" ? (
              <Link href={element?.element?.urlView ?? ''} className={`button-link extended ${lightModeActive} light`} target="__blank">
                <FontAwesomeIcon
                  icon={faEye}
                  color="fff"
                  className="fa-sm"
                />
                <p>{translate.online}</p>
              </Link>
            ) : null}

            {element?.element?.urlCode != "" ? (
              <Link href={element?.element?.urlCode ?? ''} className={`button-link extended ${lightModeActive} light`} target="__blank">
                <FontAwesomeIcon
                  icon={faCode}
                  color="fff"
                  className="fa-sm"
                />
                <p>{translate.source}</p>
              </Link>
            ) : null}

            {element?.element?.urlDetails != "" ? (
              <Link href={element?.element?.urlDetails ?? ''} className={`button-link extended ${lightModeActive} light`}>
                <FontAwesomeIcon
                  icon={faAlignLeft}
                  color="fff"
                  className="fa-sm"
                />
                <p>{translate.info}</p>
              </Link>
            ) : null}
        </>
    )

}

export default ProjectLinkElement