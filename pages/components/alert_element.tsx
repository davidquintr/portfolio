import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const AlertElement = ({ type, text }) => {
    return (
        <div className="alert-element">
            <FontAwesomeIcon icon={type === "alert" ? faExclamationTriangle : faCircleCheck} />
            <p>{text}</p>
        </div>
    );
}

export default AlertElement;