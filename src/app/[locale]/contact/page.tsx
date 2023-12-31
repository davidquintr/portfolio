import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxContent from "../../components/boxContent";
import external from "../../sources/external";
import Link from "next/link";
import { useTranslations } from "next-intl";
import FormContact from "../../components/formContact";

export default function Contact() {
  const dictionary = useTranslations();

  const formData: IFormContact = {
    names: dictionary("contact.form.names"),
    email: dictionary("contact.form.email"),
    message: dictionary("contact.form.message"),
    success: dictionary("contact.form.success"),
    fail: dictionary("contact.form.fail"),
    send: dictionary("contact.form.send"),
  };

  return (
    <BoxContent title={dictionary("contact.title")} className="">
      <div className="grid md:grid-cols-6 md:mx-10">
        <p className="md:col-span-6 text-center mb-5 text-light-black dark:text-dark-gray">
          {dictionary("contact.cta")}
        </p>

        <FormContact formData={formData} />

        <div className="justify-center md:col-span-2">
          <p className="text-balance text-center my-4 dark:text-dark-gray">
            {dictionary("contact.direct_comm")}
          </p>
          <div className="flex justify-center gap-2.5">
            {external.social_media.map((media, index) => (
              <Link
                key={index}
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
