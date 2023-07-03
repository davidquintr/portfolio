import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
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
                    <Link href={"https://www.instagram.com/davidquintr/"}>
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </Link>
                    <Link href={"https://api.whatsapp.com/send/?phone=77488103&text&type=phone_number&app_absent=0"}>
                        <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                    </Link>
                </div>
            </footer>
        </>
    )
}
export default Footer