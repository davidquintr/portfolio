import PersonalItem from "./personal_item";
import personal from "../assets/json/personal.json";
import { differenceInYears } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useConfigContext } from "./config_provider";

export default function PersonalInfo() {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let myAge = new Date(personal?.birthday);
  const age = differenceInYears(new Date(), myAge);
  let lightModeActive = darkMode ? "lightMode" : ""

  let translate = {
    info: language == "es" ? "Información Personal" : "Personal info",
    age: language == "es" ? "Edad" : "Age",
    birth: language == "es" ? "Cumpleaños" : "Birthday",
    country: language == "es" ? "País" : "Country",
    contact: language == "es" ? "Contáctame" : "Contact me",
    cv : `CV David Quintanilla-${language.toUpperCase()}`,
    open: language == "es" ? "Abrir" : "Open"
  }

  return (
    <>
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ delay: 0.30 }}
          className={`section section-personal ${lightModeActive}`}
        >
          <div className="section-title">
            <h2>{translate.info}</h2>
          </div>
          <div className="section-body personal">
            <PersonalItem
              title={"Email"}
              url={""}
              detail={personal?.mail}
            ></PersonalItem>
            <PersonalItem
              title={translate.birth}
              url={""}
              detail={personal?.birthday}
            ></PersonalItem>
            <PersonalItem
              title={translate.country}
              url={""}
              detail={personal?.country}
            ></PersonalItem>
            <PersonalItem
              title={"CV"}
              url={translate.cv}
              detail={translate.open}
            ></PersonalItem>
          </div>
          <div className="section-footer">
            <Link className={`button-link ${lightModeActive}`} href="/contact">{translate.contact}</Link>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
}
