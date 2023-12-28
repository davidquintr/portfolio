import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxContent from "../components/boxContent";
import en from "../sources/en";
import external from "../sources/external";
import Link from "next/link";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <BoxContent title={en.contact.title} className="">
      <div className="grid md:grid-cols-6 md:mx-10">
        <p className="md:col-span-6 text-center mb-5 text-light-black dark:text-dark-gray">
          {en.contact.cta}
        </p>
        <form className="md:col-span-4 md:px-[5%]">
          <div className="flex flex-col mb-2">
            <label className="hidden">{en.contact.form.names}</label>
            <input
              type="text"
              className="h-12 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
              placeholder={en.contact.form.names}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="hidden">{en.contact.form.names}</label>
            <input
              className="h-12 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
              type="text"
              placeholder={en.contact.form.names}
            />
          </div>
          <div className="flex flex-col">
            <label className="hidden">{en.contact.form.names}</label>
            <textarea
              className="min-h-32 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 py-3 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
              placeholder={en.contact.form.names}
            />
          </div>
          <button className="flex justify-center items-center w-full gap-2 mb-4 mt-2 py-2 rounded-full bg-light-blue-400 dark:bg-dark-blue-500 dark:hover:bg-dark-blue-200 dark:text-dark-blue-100  hover:bg-light-blue-500 active:scale-95 transition-all text-white">
            <FontAwesomeIcon icon={faPaperPlane} className="fa-sm" />
            <span>{en.contact.form.send}</span>
          </button>
        </form>
        <div className="justify-center md:col-span-2">
          <p className="text-balance text-center my-4 dark:text-dark-gray">
            {en.contact.direct_comm}
          </p>
          <div className="flex justify-center gap-2.5">
            {external.social_media.map((media, index) => (
              <Link
                target="_blank"
                href={media.link}
                className="dark:bg-dark-blue-500 dark:hover:bg-dark-blue-200 bg-light-blue-400 flex justify-center items-center p-3 text-white hover:bg-light-blue-500 active:scale-95 transition-all rounded-full"
              >
                <FontAwesomeIcon
                  icon={media.icon}
                  className="size-7"
                  key={index}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BoxContent>
  );
}
