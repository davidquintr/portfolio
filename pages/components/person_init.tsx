import basics from "../assets/json/basics.json";
import Image from "next/image";
import davidquint from "../assets/img/davidquint-photo.png";
import TechItems from "../components/tecnologies_items";

export default function PersonInit() {
  return (
    <>
      <article className="article section-person">
        <div className="section-contain">
            <Image
              className="section-person-img"
              width={400}
              height={400}
              src="/davidquint-photo.png"
              alt="img_ico"
            ></Image>
            <div className="section-person-details">
              <h2>{basics?.author}</h2>
              <div dangerouslySetInnerHTML={{ __html: basics?.eng.details }} />
            </div>
        </div>
        <CompleteTech></CompleteTech>
      </article>
    </>
  );
}

const CompleteTech = () => {
  return (
    <div className="section section-tech">
      <TechItems></TechItems>
    </div>
  );
};
