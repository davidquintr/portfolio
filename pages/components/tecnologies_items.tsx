import tech from "../assets/json/technologies.json";
import Image from "next/image";
import davidquint from "../assets/img/davidquint-photo.png";
import { useRouter } from "next/router";

export default function TechnologiesItems() {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

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
