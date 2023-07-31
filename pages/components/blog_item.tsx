import data from "../assets/json/blog_published.json";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import personal from "../assets/json/personal.json";
import Link from 'next/link'
import DateParsed from './date'
import Tags from "./tags";


const BlogItem = ({ element, index }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{opacity: 1, x: 0}}
          transition={{ delay: 0.1 * (index + 1 / 2)}}
          viewport={{once: true}}
          className="post"
        >
        <Link href={"blog/" + element?.url}>
          <Image
            src={element?.icon}
            alt={element?.title}
            title={element?.title}
            width={720}
            height={405}
            placeholder="blur"
            blurDataURL={element?.blur}
            className="post-img"
          ></Image>
          <div className="post-info">
            <div className="post-info-tag">
              <Tags tag={element?.tags}></Tags>
            </div>

            <div className="post-info-title">
                <h3>{element?.title}</h3>
                <p className="post-info-description">{element?.description}</p>
                <p>
                  <DateParsed dateOrigin={element?.date}></DateParsed>
                </p>  
            </div>

            <div className="post-info-author">
                <Image src={personal?.photo} alt={personal?.name} width={128} height={128}></Image>
                <div className="post-info-author details">
                    <p>Author</p>
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
