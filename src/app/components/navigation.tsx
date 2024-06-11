"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "../[lang]/dictionaries";
import provideRoutes from "../sources/routes";
import DropdownButton from "./dropdown_button";

export default function Navigation({lang} : {lang : string}) {
  const path = usePathname();
  const dict = getDictionary(lang)
  const routes = provideRoutes(dict.navigation)

  const language = [
    {
      link: "/es",
      name: "Español"
    },
    {
      link: "/en",
      name: "English"
    }
  ]

  return (
    <>
    <header className="flex z-30 bg-light-blue-100 backdrop-blur-3xl dark:bg-dark-blue-550 justify-center rounded-b-md mb-6 max-w-[1400px] w-full mx-auto top-0 sticky">
        {routes.map((link, index) => {
          return (
            <Link
              key={index}
              className={`py-2.5 px-2 text-light-primary dark:text-dark-blue-300 text-base transition-all active:scale-95 ${
                `/${lang}${link.href}` == path || index == 0 && "/" == path ? "bg-light-blue-200 hover:light-blue-100 dark:bg-dark-blue-500" : "hover:bg-light-blue-150 dark:hover:bg-dark-blue-500"}`}
              href={`/${lang}${link.href}`}
            >
              <p className="text-xs sm:text-base">{link.text}</p>
            </Link>
          );
        })}
        <DropdownButton activeClass="!bg-light-blue-100 dark:!bg-dark-blue-500 " elementsClass="text-xs text-center sm:text-base dark:bg-dark-blue-500" className="h-full !bg-light-blue-100 dark:!bg-transparent px-2 dark:hover:!bg-dark-blue-500 dark:text-dark-blue-200 hover:!bg-light-blue-150 !rounded-none *:text-xs *:sm:text-base" name={dict.lang} elements={language} />
      </header>
    </>
  );
}
