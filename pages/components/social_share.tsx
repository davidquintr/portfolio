import Link from "next/link";
import Image from "next/image";
import social from "../assets/json/socials_share.json";

const SocialShare = ({ link }) => {
  return (
    <>
      {social?.map((element, index) => {
        return (
          <a
            key={index}
            className="button-link social"
            target="__blank"
            href={`${element.url}${link}`}
          >
            <Image
              src={element.img}
              alt={element.name}
              width={128}
              height={128}
            />
          </a>
        );
      })}
    </>
  );
};

export default SocialShare;