import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faAddressBook,
  faHouse,
  faBarsProgress,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Router from "next/router";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useConfigContext } from "./components/config_provider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/", text: {es : "Inicio", eng: "Home"}, icon: faHouse },
  { href: "/blog", text: {es : "Blog", eng: "Blog"}, icon: faBlog },
  { href: "/projects", text: {es : "Proyectos", eng: "Projects"}, icon: faBarsProgress },
  { href: "/contact", text: {es : "Contacto", eng: "Contact"}, icon: faAddressBook },
];

const LIGHT_MODE_TEXT = "lightMode"

const NavBar = () => {
  // @ts-ignore
  const { language, setLanguage, darkMode, setDarkMode } = useConfigContext();
  const path = usePathname();
  const [headerTransparent, setHeaderTransparent] = useState(false);
  const headerClass = () => {
    return headerTransparent ? " transparent" : "";
  };

  let lightModeActive = darkMode ? "lightMode" : ""

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) setHeaderTransparent(true);
      else setHeaderTransparent(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="section-person-buttons">
        <button
          onClick={() => {
            setLanguage(language == "es" ? "en" : "es");
          }}
          className={`button-change ${lightModeActive}`}
        >
          {language == "es" ? "en" : "es"}
        </button>
        <button
          style={{display: "none"}}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className={`button-change ${lightModeActive}`}
        >
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun}></FontAwesomeIcon>
        </button>
      </div>
      <nav className={`nav nav-bar ${lightModeActive}${headerClass()} `}>
        {links.map((element, index) => {
          return (
            <Link
              key={index}
              className={`button-link ${lightModeActive} extended minimal ${
                element.href === path ? "active" : ""
              }`}
              href={element.href}
            >
              <FontAwesomeIcon
                icon={element.icon}
                className="fa-ssm"
              />
              <p>{language == "es" ? element.text.es : element.text.eng}</p>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default NavBar;
