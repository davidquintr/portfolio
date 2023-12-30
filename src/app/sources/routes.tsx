import en from "../sources/en";
import {
  faAddressBook,
  faHouse,
  faBarsProgress,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

const routes = [
  { href: "/", text: en.navigation.home, icon: faHouse },
  { href: "/blog", text: en.navigation.blog, icon: faBlog },
  {
    href: "/projects",
    text: en.navigation.projects,
    icon: faBarsProgress,
  },
  {
    href: "/contact",
    text: en.navigation.contact,
    icon: faAddressBook,
  },
];

export default routes;
