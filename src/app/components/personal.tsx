import Image from "next/image";
import en from "../sources/en";
import techStack from "../sources/techStack";
import external from "../sources/external";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import DropdownButton from "./dropdown_button";

export default function Personal() {

  return (
    <section className="w-full mx-auto mb-12 px-4 z-20">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-2">
        <Image
          className="rounded-full size-[120px]"
          src="/davidquint-photo.png"
          quality={20}
          width={120}
          sizes="(max-width: 768px) 28vw, (max-width: 1200px) 18vw, 20vw"
          priority={true}
          height={120}
          alt={en.author}
          title={en.author}
        />
        <div className="text-center flex flex-col justify-center sm:text-left text-light-primary dark:text-white">
          <h1 className="text-xl dark:text-dark-gray-100">{en.role}</h1>
          <h2 className="font-bold text-3xl sm:text-4xl">
            {en.author}
          </h2>
          <div className="flex justify-center sm:justify-start gap-1.5 pt-1">
            {external.social_media.map((media, index) => (
              <Link
                key={index}
                target="_blank"
                aria-label={media.name}
                href={media.link}
                className="bg-light-blue-100 dark:bg-dark-blue-600 dark:text-dark-blue-100 hover:bg-light-blue-200 dark:hover:bg-dark-blue-700 transition-all active:scale-95 text-light-primary flex justify-center items-center gap-1 px-1.5 py-1 rounded-md"
              >
                <FontAwesomeIcon
                  icon={media.icon}
                  className="size-4"
                  key={index}
                />
                <p>{media.name}</p>
              </Link>
            ))}
            <DropdownButton elements={external.curriculum} icon={faFileLines} name={en.cvText} />
          </div>
        </div>
      </div>
    </section>
  );
}
