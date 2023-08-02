
import Image from "next/image";
import {Suspense, lazy} from 'react'
import TechnologiesSpecific from "./tecnologies_specific";
import { motion, AnimatePresence } from "framer-motion";
import ProjectLinkElement from "./project_link_element";

const ProjectsItem = ({ element, index }) => {

  const image = lazy(()=> import(element?.img))

  return (
    <>
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, x: -15 }}
        whileInView={{opacity: 1, x: 0}}
        transition={{ delay: 0.1 * (index + 1 / 10)}}
        viewport={{once: true}}
      
      className="project">
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
        <div className="project-info">
          <div className="project-info-details">
            { element?.archive == "true" ? <p className="project-archive">From project archive</p> : null}
            <h3>{element?.title}</h3>
            <p>{element?.details}</p>
            <div className="project-info-tech">
              <TechnologiesSpecific
                lineTech={element?.tech}
              ></TechnologiesSpecific>
            </div>
          </div>
          <div className="project-buttons">
            <ProjectLinkElement element={element}></ProjectLinkElement>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectsItem;
