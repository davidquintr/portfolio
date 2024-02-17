import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

interface redirect {
    href: string
}

export default function Redirect({href} : redirect) {

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://davidquintr.com/" + href;
    }, 1500);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white', textAlign: 'center' }}>
      <h1>You are being redirected to my new portfolio and domain</h1>
      <FontAwesomeIcon className="spinner-icon" icon={faSpinner} style={{ width: '64px', height: '64px', color: '#a3bbff' }} />
    </div>
  );
}
