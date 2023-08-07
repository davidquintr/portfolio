import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const PersonalItem = ({ title , detail, url }) => {
  return (
    <>
      <div className="personal-item">
        <h4>{title}</h4>
        {url == "" ? (
          <p>{detail}</p>
        ) : (
          <Link className="button-link extended" href={`/documents/${url}`} target='__blank'>
            <FontAwesomeIcon icon={faEye} color='fff' className='fa-sm color-blue'  />
            <p>{detail}</p>
          </Link>
        )}
      </div>
    </>
  );
}

export default PersonalItem;