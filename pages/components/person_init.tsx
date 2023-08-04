import basics from "../assets/json/basics.json";
import Image from "next/image";
import davidquint from "../assets/img/davidquint-photo.jpg";
import davidquintBlur from "../assets/img/davidquint-photo-blur.jpg";
import tech from "../assets/json/technologies.json";
import { useConfigContext } from "./config_provider";


export default function PersonInit() {
  // @ts-ignore
  const origin = "/portfolio"
    // @ts-ignore
    const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();

  return (
    <>
      <article className="article section-person">
        <div className="section-contain">
          <div className="section-person-contain">
            <Image
              className="section-person-img"
              placeholder="blur"
              blurDataURL={davidquintBlur.src}
              width={200}
              height={200}
              src={davidquint}
              alt="img_ico"
            ></Image>
          </div>
          <div className="section-person-details">
            <h2>{basics?.author}</h2>
            <div dangerouslySetInnerHTML={{ __html: language == "es"? basics?.es.details : basics?.eng.details }} />
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
                width={16}
                height={16}
                key={index}
                alt={element.dim}
            />              )
          )}
        </div>
      </article>
    </>
  );
}
