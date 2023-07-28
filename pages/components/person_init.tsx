import basics from "../assets/json/basics.json";
import Image from "next/image";
import davidquint from "../assets/img/davidquint-photo.jpg";
import davidquintBlur from "../assets/img/davidquint-photo-blur.jpg";
import { useRouter } from "next/router";
import tech from "../assets/json/technologies.json";
import TechItem from "./tech_item";

export default function PersonInit() {
  const origin = "/portfolio"

  return (
    <>
      <article className="article section-person">
        <div className="section-contain">
          <Image
            className="section-person-img"
            placeholder="blur"
            blurDataURL={davidquintBlur.src}
            width={400}
            height={400}
            src={davidquint}
            alt="img_ico"
          ></Image>
          <div className="section-person-details">
            <h2>{basics?.author}</h2>
            <div dangerouslySetInnerHTML={{ __html: basics?.eng.details }} />
          </div>
        </div>
        <div className="section section-tech">
          {tech?.map(
            (element, index) =>
              element.show == "true" && (
                <Image
                className="tech-items"
                title={element.alt}
                src={`${origin}/${element.url?.replace("./", "")}`}
                width={32}
                height={32}
                key={index}
                alt={element.dim}
            />              )
          )}
        </div>
      </article>
    </>
  );
}
