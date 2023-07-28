import tech from "../assets/json/technologies.json";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TechItem from "./tech_item";

export default function TechnologiesItems() {
  const origin = "/portfolio"

  return (
    <>
      {tech?.map(
        (element, index) =>
          element.show == "true" && (
            <TechItem element={element} key={index} index={index}></TechItem>
          )
      )
      }
    </>
  );
}
