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
    }, 10);

    return () => clearTimeout(redirectTimeout);
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white', textAlign: 'center' }}>
      <p>Redirecting...</p>
    </div>
  );
}
