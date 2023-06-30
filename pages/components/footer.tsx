import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <p>©2023 Designed and Programmed by David Quintanilla</p>
                <div className="footer-social">
                    <Link href={"https://github.com/davidquintr/portfolio"}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/david-quintanilla-ruiz-a41044231/"}>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </Link>
                </div>
            </footer>
        </>
    )
}
export default Footer