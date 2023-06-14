import PersonalItem from "./personal_item";
import personal from "../assets/json/personal.json";
import { differenceInYears } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function PersonalInfo() {
  let myAge = new Date("2004-04-19");
  const age = differenceInYears(new Date(), myAge);

  return (
    <>
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ delay: 0.30 }}
          className="section section-personal"
        >
          <div className="section-title">
            <h2>Personal info</h2>
          </div>
          <div className="section-body personal">
            <PersonalItem
              title={"Email"}
              url={""}
              detail={personal.mail}
            ></PersonalItem>
            <PersonalItem
              title={"Age"}
              url={""}
              detail={age.toString()}
            ></PersonalItem>
            <PersonalItem
              title={"Birthday"}
              url={""}
              detail={personal.birthday}
            ></PersonalItem>
            <PersonalItem
              title={"CV"}
              url={"curriculum.pdf"}
              detail={"Open"}
            ></PersonalItem>
          </div>
          <div className="section-footer">
            <Link className="button-link" href="/contact">Contact me</Link>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
}
