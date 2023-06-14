import { motion, AnimatePresence } from "framer-motion";
import basics from "../assets/json/basics.json";

export default function AboutMe() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ delay: 0.25 }} className="section section-aboutme">
          <div className="section-title">
            <h2>About me</h2>
          </div>
          <div className="section-body">
            <div dangerouslySetInnerHTML={{ __html: basics.eng.aboutme }}></div>
          </div>
      </motion.section>
    </AnimatePresence>
  );
}
