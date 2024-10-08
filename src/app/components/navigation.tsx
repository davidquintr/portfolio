"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "../[lang]/dictionaries";
import provideRoutes from "../sources/routes";
import DropdownButton from "./dropdown_button";
import { useEffect } from "react";

export default function Navigation({ lang }: { lang: string }) {
  const path = usePathname();
  const dict = getDictionary(lang);
  const routes = provideRoutes(dict.navigation);
  const defaultValues = ['es', 'en']

  let language = [
    {
      link: defaultValues[0],
      name: "Español",
    },
    {
      link: defaultValues[1],
      name: "English",
    },
  ];

  useEffect(() => {
    if (path === '') return;
    const currentPath = path.replace(`/${lang}`, "")
    language.map((thislang, index) => {
      thislang.link = `/${defaultValues[index]}${currentPath}`
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <>
      <header className="flex z-30 bg-light-blue-100 backdrop-blur-3xl dark:bg-dark-blue-700/60 justify-center rounded-b-md mb-6 max-w-[1400px] w-full mx-auto top-0 sticky">
        {routes.map((link, index) => {
          return (
            <Link
              key={index}
              className={`py-2.5 px-4 text-light-primary dark:text-dark-blue-300 text-base transition-all active:scale-95 ${
                `/${lang}${link.href}` == path || (index == 0 && "/" == path)
                  ? "bg-light-blue-200 hover:light-blue-100 dark:!bg-dark-blue-700"
                  : "hover:bg-light-blue-150 dark:hover:bg-dark-blue-700"
              }`}
              href={`/${lang}${link.href}`}
            >
              <p className="text-xs sm:text-base">{link.text}</p>
            </Link>
          );
        })}
        <DropdownButton
          activeClass="!bg-light-blue-200 dark:!bg-dark-blue-500"
          elementsClass="text-xs text-center sm:text-base dark:!bg-dark-blue-500 dark:hover:!bg-dark-blue-650 "
          className="h-full bg-light-blue-100 px-2 dark:hover:bg-dark-blue-500 bg-transparent dark:text-dark-blue-200 hover:bg-light-blue-150 !rounded-none *:text-xs *:sm:text-base"
          name={dict.lang}
          elements={language}
        />
      </header>
    </>
  );
}
