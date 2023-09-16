import data from "../assets/json/blog_published.json";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import personal from "../assets/json/personal.json";
import Link from 'next/link'
import DateParsed from './date'
import Tags from "./tags";
import { useConfigContext } from "./config_provider";


const BlogItem = ({ element, index }) => {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""

  let info = {
    url : language == "es" ? element?.url.es : element?.url.eng,
    title: language == "es" ? element?.title.es : element?.title.eng,
    description: language == "es" ? element?.description.es : element?.description.eng
  }

  let translate = {
    author : language == "es"? "Autor" : "Author"
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{opacity: 1, x: 0}}
          transition={{ delay: 0.07 * (index + 1 / 10)}}
          viewport={{once: true}}
          className={`post ${lightModeActive}`}
        >
        <Link href={`blog/${info.url}`}>
          <Image
            src={element?.icon}
            alt={info.title}
            title={info.title}
            width={720}
            height={405}
            placeholder="blur"
            blurDataURL={element?.blur}
            className={`post-img ${lightModeActive}`}
          ></Image>
          <div className="post-info">
            <div className="post-info-tag">
              <Tags tag={element?.tags}></Tags>
            </div>

            <div className="post-info-title">
                <h3>{info.title}</h3>
                <p className="post-info-description">{info.description}</p>
                <p>
                  <DateParsed dateOrigin={element?.date}></DateParsed>
                </p>  
            </div>

            <div className="post-info-author">
                <Image src={personal?.photo} alt={personal?.name} width={128} height={128}></Image>
                <div className="post-info-author details">
                    <p>{translate.author}</p>
                    <p className="person">{personal?.name}</p>
                </div>
            </div>
          </div>
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default BlogItem;
