import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faAddressBook,
  faHouse,
  faBarsProgress,
  faBlog
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Router from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const links = [
  { href: "/", text: "Home", icon: faHouse },
  {href: "/blog", text: "Blog", icon: faBlog},
  { href: "/projects", text: "Projects", icon: faBarsProgress },
  { href: "/contact", text: "Contact", icon: faAddressBook },
];

const NavBar = () => {
  const path = usePathname();

  const [headerTransparent, setHeaderTransparent] = useState(false);

  const headerClass = () => {
    return headerTransparent ? "transparent" : ""
  }

  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if(scrollY > 0)
            setHeaderTransparent(true);
        else
            setHeaderTransparent(false);
    };
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[]);


  return (
    <>
      <nav className={`nav nav-bar ${headerClass()}`}>
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

export default NavBar