"use client"
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { getDictionary } from "../[lang]/dictionaries";

export default function Form({lang, className} : {lang: string, className? : string}) {
  const dict = getDictionary(lang);

  const form = useRef<HTMLFormElement>(null);
  const [isEmailSent, setIsEmailSent] = useState<boolean>();
  const [disableButton, setDisableButton] = useState<boolean>();
  const [inProgress, setInprogress] = useState<boolean>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInprogress(true);
    emailjs
      .sendForm(
        "service_zmht5zq",
        "template_bq67pfa",
        form.current || "",
        "aqJFVCZrRMTDkeRGM"
      )
      .then(
        () => {
          setIsEmailSent(true);
          setDisableButton(true);
          setInprogress(false);
        },
        () => {
          setIsEmailSent(false);
          setDisableButton(true);
          setInprogress(false);
        }
      );
  };

  return (
    <>
      {isEmailSent != null && (
        <div
          className={`md:col-span-7 animate-jump py-4 rounded-lg text-center text-black dark:text-white ${
            isEmailSent
              ? "bg-light-green dark:bg-dark-green"
              : "bg-light-red dark:bg-dark-red"
          }`}
        >
          {isEmailSent ? dict.contact.form.success : dict.contact.form.fail}
        </div>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`md:col-span-4 ${className}`}
      >
        <div className="flex flex-col mb-2">
          <label className="hidden">{dict.contact.form.names}</label>
          <input
            type="text"
            name="user_name"
            required
            className="h-12 placeholder:text-sm border dark:bg-dark-schema-input border-light-blue-100 bg-light-gray-100 rounded-md px-2.5 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
            placeholder={dict.contact.form.names}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="hidden">{dict.contact.form.email}</label>
          <input
            className="h-12 placeholder:text-sm border dark:bg-dark-schema-input border-light-blue-100 bg-light-gray-100 rounded-md px-2.5 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
            type="email"
            name="user_email"
            required
            placeholder={dict.contact.form.email}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="hidden">{dict.contact.form.message}</label>
          <textarea
            className="min-h-32 placeholder:text-sm border dark:bg-dark-schema-input border-light-blue-100 bg-light-gray-100 rounded-md px-2.5 py-3 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
            name="message"
            rows={4}
            placeholder={dict.contact.form.message}
          />
        </div>
        <button
          disabled={disableButton}
          className="flex justify-center items-center w-full gap-2 py-2 rounded-md bg-light-blue-100 dark:bg-dark-blue-600  enabled:hover:bg-light-blue-200 enabled:active:scale-95 disabled:brightness-90 disabled:scale-95 transition-all text-light-primary dark:text-dark-blue-100 dark:enabled:hover:bg-dark-blue-700"
        >
          <FontAwesomeIcon
            icon={inProgress ? faSpinner : faPaperPlane}
            className={`${inProgress && "animate-spin"} size-3.5`}
          />
          <span>{dict.contact.form.send}</span>
        </button>
      </form>
    </>
  );
}
