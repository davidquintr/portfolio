import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <Link href={"https://github.com/davidquintr/portfolio"}>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </Link>
                <p>©2023 Designed and Programmed by David Quintanilla</p>
            </footer>
        </>
    )
}
export default Footer