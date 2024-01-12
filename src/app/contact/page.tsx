"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxContent from "../components/boxContent";
import en from "../sources/en";
import external from "../sources/external";
import Link from "next/link";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
        (result) => {
          setIsEmailSent(true);
          setDisableButton(true);
          setInprogress(false);
        },
        (error) => {
          setIsEmailSent(false);
          setDisableButton(true);
          setInprogress(false);
        }
      );
  };

  return (
    <BoxContent title={en.contact.title} className="">
      <div className="grid md:grid-cols-6 md:mx-10">
        <p className="md:col-span-6 text-center mb-5 text-light-black dark:text-dark-gray">
          {en.contact.cta}
        </p>
        {isEmailSent != null && (
          <div
            className={`md:col-span-6 md:mx-[5%] animate-jump mb-4 py-4 rounded-lg text-center text-black dark:text-white ${
              isEmailSent
                ? "bg-light-green dark:bg-dark-green"
                : "bg-light-red dark:bg-dark-red"
            }`}
          >
            {isEmailSent ? en.contact.form.success : en.contact.form.fail}
          </div>
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:col-span-4 md:px-[5%]"
        >
          <div className="flex flex-col mb-2">
            <label className="hidden">{en.contact.form.names}</label>
            <input
              type="text"
              name="user_name"
              required
              className="h-12 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
              placeholder={en.contact.form.names}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="hidden">{en.contact.form.email}</label>
            <input
              className="h-12 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
              type="email"
              name="user_email"
              required
              placeholder={en.contact.form.email}
            />
          </div>
          <div className="flex flex-col">
            <label className="hidden">{en.contact.form.message}</label>
            <textarea
              className="min-h-32 placeholder:text-sm bg-light-gray rounded-lg border-b-2 border-light-blue-400 px-2.5 py-3 outline-light-blue-300 dark:bg-dark-bg dark:border-dark-blue-500 dark:focus:outline-dark-blue-200 dark:focus:bg-dark-items"
              name="message"
              rows={4}
              placeholder={en.contact.form.message}
            />
          </div>
          <button
            disabled={disableButton}
            className="flex justify-center items-center w-full gap-2 mb-4 mt-2 py-2 rounded-full bg-light-blue-400 dark:bg-dark-blue-500 enabled:dark:hover:bg-dark-blue-200 dark:text-dark-blue-100  enabled:hover:bg-light-blue-500 enabled:active:scale-95 disabled:brightness-90 disabled:scale-95 transition-all text-white"
          >
            <FontAwesomeIcon
              icon={inProgress ? faSpinner : faPaperPlane}
              className={`${inProgress && "animate-spin"} size-3.5`}
            />
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
                key={index}
                target="_blank"
                aria-label={media.name}
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
