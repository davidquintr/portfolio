import { useEffect, useState } from "react";
import {
  faAddressBook,
  faHouse,
  faBarsProgress,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import en from "./en";
import es from "./es";
import Dictionary from "../types/TypeDictionary";

export const getRoutes = (language: string) => {
  const dictionary: Dictionary = language === "en" ? en : es;

  return [
    { href: "", text: dictionary.navigation.home, icon: faHouse },
    { href: "/blog", text: dictionary.navigation.blog, icon: faBlog },
    {
      href: "/projects",
      text: dictionary.navigation.projects,
      icon: faBarsProgress,
    },
    {
      href: "/contact",
      text: dictionary.navigation.contact,
      icon: faAddressBook,
    },
  ];
};
