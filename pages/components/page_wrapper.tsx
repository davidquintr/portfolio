"use-client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }) => {
  return(<>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>);
};
