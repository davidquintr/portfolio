import socials from '../assets/json/socials.json';
import Image from 'next/image';
import { useConfigContext } from "./config_provider";

const SocialItems = () => {
    //@ts-ignore
    const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
    let lightModeActive = darkMode ? "lightMode" : ""

    return(
        <>
        {
        socials?.map((element, index)=>{
            return <a key={index} className={`button-link ${lightModeActive} social`} target='__blank' href={element.url}>
                <Image src={element.img} alt={element.name} width={32} height={32}></Image>
            </a>
        })
        }            
        </>
    )
}

export default SocialItems