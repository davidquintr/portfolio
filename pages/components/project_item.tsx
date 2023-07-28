
import Image from "next/image";
import TechnologiesSpecific from "./tecnologies_specific";
import { motion, AnimatePresence } from "framer-motion";
import projects from '../assets/json/projects_en.json'
import ProjectLinkElement from "./project_link_element";

type ProjectsItemProps = {
  element : typeof projects[0]
  index : number
};
const ProjectsItem: React.FC<ProjectsItemProps> = ({ element, index }) => {
  return (
    <>
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, x: -15 }}
        whileInView={{opacity: 1, x: 0}}
        transition={{ delay: 0.1 * (index / 2)}}
        viewport={{once: true}}
      
      className="project">
        <Image
          className="project-img"
          src={element?.img}
          width={960}
          height={540}
          alt="example"
        ></Image>
        <div className="project-info">
          <div className="project-info-details">
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
