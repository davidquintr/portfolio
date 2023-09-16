
import Image from "next/image";
import {Suspense, lazy} from 'react'
import TechnologiesSpecific from "./tecnologies_specific";
import { motion, AnimatePresence } from "framer-motion";
import ProjectLinkElement from "./project_link_element";
import { useConfigContext } from "./config_provider";

const ProjectsItem = ({ element, index }) => {
    // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""
  const image = lazy(()=> import(element?.img))

  let currentDetails = language == "es" ? element?.details.es : element?.details.eng
  let archiveText = language == "es" ? "Desde el Archivo" : "From project archive"

  return (
    <>
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, x: -15 }}
        whileInView={{opacity: 1, x: 0}}
        transition={{ delay: 0.07 * (index + 1 / 10)}}
        viewport={{once: true}}
      
      className={`project ${lightModeActive}`}>
        <Image
          className="project-img"
          src={element?.img}
          width={720}
          height={405}
          alt="example"
          loading="lazy"
          placeholder="blur"
          blurDataURL={element?.blur}
        ></Image>
        <div className={`project-info ${lightModeActive}`}>
          <div className={`project-info-details ${lightModeActive}`}>
            { element?.archive == "true" ? <p className="project-archive">{archiveText}</p> : null}
            <h3>{element?.title}</h3>
            <p>{currentDetails}</p>
            <div className={`project-info-tech ${lightModeActive}`}>
              <TechnologiesSpecific
                lineTech={element?.tech}
              ></TechnologiesSpecific>
            </div>
          </div>
          <div className={`project-buttons ${lightModeActive}`}>
            <ProjectLinkElement element={element}></ProjectLinkElement>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectsItem;
