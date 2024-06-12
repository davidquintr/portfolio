"use client";
import { IconDefinition, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IDropdownButton {
  icon?: IconDefinition;
  name: string;
  elements: {
    link: string;
    name: string;
  }[];
  className?: string;
  elementsClass?: string;
  activeClass?: string;
}

export default function DropdownButton({
  icon,
  name,
  elements,
  className,
  elementsClass,
  activeClass,
}: IDropdownButton) {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState<boolean>();

  function onDropdownClick() {
    setOpen(!isOpen);
  }

  const isExternal = (link: string) => {
    try {
      new URL(link);
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative z-10">
      <button
        onClick={onDropdownClick}
        className={`${
          className != undefined
            ? className
            : "bg-light-blue-100 hover:bg-light-blue-200 dark:bg-dark-blue-600 dark:hover:bg-dark-blue-700 dark:text-dark-blue-100"
        } transition-all active:scale-95 text-light-primary flex justify-center items-center gap-1 px-1.5 py-1 ${
          isOpen
            ? `rounded-b-none rounded-t-md ${
                activeClass != undefined
                  ? activeClass
                  : "dark:bg-dark-blue-700 bg-light-blue-200"
              }`
            : "rounded-md"
        }`}
      >
        {icon && <FontAwesomeIcon icon={icon} className="size-4" />}
        <p>{name}</p>
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`transition-transform size-2 ${isOpen && "rotate-180"}`}
        />
      </button>
      <div
        className={`absolute w-full transition-all overflow-hidden left-0 ${
          !isOpen && "!h-0"
        }`}
        style={{ height: elements.length * 40 }}
      >
        <div className="bg-light-blue-100 dark:bg-dark-blue-600 dark:text-dark-blue-100 shadow-md">
          {elements.map((el, index) =>
              <a
                target={isExternal(el.link) ? "_blank" : "_self"}
                onClick={onDropdownClick}
                href={el.link}
                key={index}
                className={`${elementsClass} block px-2 py-2 last:rounded-b-md hover:bg-light-blue-200 dark:hover:bg-dark-blue-700 active:scale-95 transition-all`}
              >
                {el.name}
              </a>
          )}
        </div>
      </div>
    </div>
  );
}
