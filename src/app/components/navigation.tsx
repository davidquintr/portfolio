"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRoutes } from "../sources/routes";

interface INavigation {
  locale: string;
}

export default function Navigation({ locale }: INavigation) {
  const path = usePathname();
  const routes = getRoutes(locale);
  return (
    <>
      {routes.map((link, index) => {
        return (
          <Link
            key={index}
            className={`flex h-8 hover:bg-light-gray text-light-blue-500 border-light-blue-500 gap-1 sm:gap-1.5 justify-center sm:h-11 items-center w-36 dark:bg-dark-blue-500 rounded-full dark:hover:bg-dark-blue-200 transition-all active:scale-95 dark:text-dark-blue-100 ${
              `/${locale}${link.href}` == path &&
              "border !bg-light-gray hover:bg-white dark:border-dark-blue-100 dark:!bg-dark-blue-200 dark:hover:!bg-dark-blue-500"
            }`}
            href={`/${locale}${link.href}`}
          >
            <FontAwesomeIcon icon={link.icon} className="size-3 sm:size-5" />
            <p className="text-xs sm:text-base">{link.text}</p>
          </Link>
        );
      })}
    </>
  );
}
