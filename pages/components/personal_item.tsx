import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useConfigContext } from "./config_provider";

const PersonalItem = ({ title , detail, url }) => {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""

  return (
    <>
      <div className="personal-item">
        <h4>{title}</h4>
        {url == "" ? (
          <p>{detail}</p>
        ) : (
          <Link className={`button-link ${lightModeActive} extended`} href={`/documents/${url}`} target='__blank'>
            <FontAwesomeIcon icon={faEye} color='fff' className='fa-sm'  />
            <p>{detail}</p>
          </Link>
        )}
      </div>
    </>
  );
}

export default PersonalItem;