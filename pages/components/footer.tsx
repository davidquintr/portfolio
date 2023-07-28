import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <p>©2023 Designed and Programmed by David Quintanilla</p>
                <div className="footer-social">
                    <Link className="footer-social-source" href={"https://github.com/davidquintr/portfolio"}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        <p>View Source</p>
                    </Link>
                </div>
            </footer>
        </>
    )
}
export default Footer