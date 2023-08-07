import { motion, AnimatePresence } from "framer-motion";
import basics from "../assets/json/basics.json";
import { useConfigContext } from "./config_provider";

export default function AboutMe() {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ delay: 0.25 }} className={`section section-aboutme ${lightModeActive}`}>
          <div className={`section-title`}>
            <h2>{language == "es" ? "Acerca de mí" : "About me"}</h2>
          </div>
          <div className="section-body">
            <div dangerouslySetInnerHTML={{ __html: language == "es" ? basics?.es.aboutme : basics?.eng.aboutme }}></div>
          </div>
      </motion.section>
    </AnimatePresence>
  );
}
