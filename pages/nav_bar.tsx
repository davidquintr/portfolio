import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faAddressBook,
  faHouse,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Router from "next/router";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "Home", icon: faHouse },
  { href: "/projects", text: "Projects", icon: faBarsProgress },
  { href: "/contact", text: "Contact", icon: faAddressBook },
];

export const NavBar = () => {
  const path = usePathname();

  return (
    <>
      <nav className="nav nav-bar">
        {links.map((element, index) => {
          return(<Link key={index} className={`button-link extended minimal ${element.href === path ? "active" : ""}`} href={element.href}>
            <FontAwesomeIcon
              icon={element.icon}
              className="fa-ssm color-blue"
            />
            <p>{element.text}</p>
          </Link>);
        })}
      </nav>
    </>
  );
};
