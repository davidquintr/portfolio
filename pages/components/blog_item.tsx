import data from "../assets/json/blog_published.json";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import personal from "../assets/json/personal.json";

type BlogItemProps = {
    element : typeof data[0]
    index : number
  };

const BlogItem:React.FC<BlogItemProps> = (element, index) => {
  let tags = element.element.tags.split(' ');

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ delay: 0.8 * (index / 2) }}
          className="post"
        >
          <Image
            src={element.element.icon}
            alt={element.element.title}
            title={element.element.title}
            width={800}
            height={450}
            className="post-img"
          ></Image>
          <div className="post-info">
            <div className="post-info-tag">
              {tags?.map((tagElement, index) => {
                return(
                    <div className="tag" key={index}>
                        <p>{tagElement}</p>
                    </div>
                )
              })}
            </div>

            <div className="post-info-title">
                <h3>{element.element.title}</h3>
                <p>{element.element.date}</p>
            </div>

            <div className="post-info-author">
                <Image src={personal.photo} alt={personal.name} width={128} height={128}></Image>
                <div className="post-info-author details">
                    <p>Author</p>
                    <p className="person">{personal.name}</p>
                </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default BlogItem;
