import tech from "../assets/json/technologies.json";
import Image from "next/image";

export default function TechnologiesItems() {
  const origin = "/portfolio"

  return (
    <>
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
            />
          )
      )}
    </>
  );
}
