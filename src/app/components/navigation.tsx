"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../sources/routes";

export default function Navigation() {
  const path = usePathname();

  return (
    <>
    <header className="flex bg-light-blue-100 dark:bg-dark-blue-550 gap-4 justify-center rounded-b-md mb-6 max-w-[1400px] w-full mx-auto z-10">
        {routes.map((link, index) => {
          return (
            <Link
              key={index}
              className={`py-2.5 px-2 text-light-primary dark:text-dark-blue-300 text-base transition-all active:scale-95 ${
                link.href == path ? "bg-light-blue-200 hover:light-blue-100 dark:bg-dark-blue-500" : "hover:bg-light-blue-150 dark:hover:bg-dark-blue-500"}`}
              href={link.href}
            >
              <FontAwesomeIcon icon={link.icon} className="size-3 sm:size-5 hidden" />
              <p className="text-xs sm:text-base">{link.text}</p>
            </Link>
          );
        })}
      </header>
    </>
  );
}
