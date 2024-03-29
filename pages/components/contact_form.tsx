import emailjs from "@emailjs/browser";
import React, { useContext, useRef, useState, useEffect, LegacyRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SocialItems from "./social_items";
import { useConfigContext } from "./config_provider";

import AlertElement from "./alert_element";

const FormContact = () => {
    // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  let lightModeActive = darkMode ? "lightMode" : ""

  const form: any = React.createRef();
  const [isEmailSent, setIsEmailSent] = useState(null);
  const buttonSend: LegacyRef<HTMLButtonElement> = React.createRef();

  const alertComponent = isEmailSent ? (
    <AlertElement type="success" text="Yep" />
  ) : (
    <AlertElement type="alert" text="nop" />
  );

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zmht5zq",
        "template_bq67pfa",
        form.current,
        "aqJFVCZrRMTDkeRGM"
      )
      .then(
        (result) => {
          setIsEmailSent(true);
          buttonSend.current.disabled = true;
        },
        (error) => {
          setIsEmailSent(false);
        }
      );
    setTimeout(() => {}, 7000);
  };

  return (
    <>
      <section className={`section section-contact ${lightModeActive}`}>
        <div className="section-title">
          <h2>{language == "es" ? "Contacto" : "Contact"}</h2>
        </div>
        <div className="section-body contact">
          <p className="text-center">
            {language == "es" ? "Si estás buscando ayuda con un proyecto o necesitas asistencia, ¡Puedes contactarme!" : "If you are looking for help with a project or need assistance, you can contact me!"}
          </p>
          <form className={`contact-contain ${lightModeActive}`} ref={form} onSubmit={sendEmail}>
            <div className="contact-elements ">
              <div className="contact-elements-middle ">
                <input
                  className="input-contact name "
                  type="text"
                  placeholder={language == "es" ? "Nombres y Apellidos" :"First Name and Last Name"}
                  name="user_name"
                  required
                ></input>
                <input
                  className="input-contact number "
                  type="text"
                  placeholder={language == "es" ? "Número de contacto" :"Contact Number"}
                  name="user_number"
                  required
                ></input>
              </div>
              <div className="contact-elements-column ">
                <input
                  className="input-contact email "
                  type="text"
                  placeholder="Email"
                  name="user_email"
                  required
                ></input>
                <textarea
                  className="input-contact subject "
                  placeholder={language == "es" ? "Asunto" : "Subject"}
                  name="message"
                  rows={4}
                  required
                ></textarea>
                <button ref={buttonSend} type="submit" className={`button-link ${lightModeActive} extended submit`}>
                  <FontAwesomeIcon icon={faPaperPlane} className="fa-sm" />
                  <p>{language == "es" ? "Enviar mensaje" :"Send Message"}</p>
                </button>
                {isEmailSent == true ? (
                  <p className={`plane-text ${lightModeActive} send`}>{language == "es" ? "Enviado" :"Sent"}</p>
                ) : isEmailSent == false ? (
                  <p className={`plane-text ${lightModeActive} no-send`}>
                    {language == "es" ? "Algo salió mal, intente más tarde..." :"Something went wrong, try later..."}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="contact-social">
              <p className="contact-social-title">
                {language == "es" ? "¿Quieres una comunicación más directa? Aquí hay otros medios para contactarme." : "Do you want more direct communication? There&apos;s another way to contact me."}
              </p>
              <div className="contact-social-elements">
                <SocialItems />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default FormContact;
