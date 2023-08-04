import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useConfigContext } from "./config_provider";

const Footer = () => {
    // @ts-ignore
    const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();

    console.log("language", language)

    return(
        <>
            <footer className="footer">
                <p>{language == "es" ? "©2023 Diseñado y Programado por David Quintanilla" : "©2023 Designed and Programmed by David Quintanilla"}</p>
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