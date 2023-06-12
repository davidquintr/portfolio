import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';

export default function PersonalItem({ title, detail, url }) {
  return (
    <>
      <div className="personal-item">
        <h4>{title}</h4>
        {url == "" ? (
          <p>{detail}</p>
        ) : (
          <a className="button-link extended">
            <FontAwesomeIcon icon={faEye} color='#fff' className='fa-sm'  />
            <p>{detail}</p>
          </a>
        )}
      </div>
    </>
  );
}
