import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';

const PersonalItem = ({ title , detail, url }) => {
  return (
    <>
      <div className="personal-item">
        <h4>{title}</h4>
        {url == "" ? (
          <p>{detail}</p>
        ) : (
          <a className="button-link extended">
            <FontAwesomeIcon icon={faEye} color='fff' className='fa-sm color-blue'  />
            <p>{detail}</p>
          </a>
        )}
      </div>
    </>
  );
}

export default PersonalItem;