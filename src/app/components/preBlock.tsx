"use client";
import Prism from "prismjs";
import { useEffect, useRef, useState } from "react";
import { getDictionary } from "../[lang]/dictionaries";

export default function PreBlock({ children, ...props }: any) {
  const lang = getDictionary("en");
  const currentLang = children.props.className.replace("lang", "language");
  const onlyLang = children.props.className.replace("lang-", "");
  const [buttonText, setButtonText] = useState(lang.post.copy_code)

  useEffect(() => {
    Prism.highlightAll();
  });

  function copyCode() {
    const codeContent = children.props.children;
    navigator.clipboard.writeText(codeContent)
      .then(() => {
        setButtonText(lang.post.copy_code_success)

        setTimeout(()=> {
          setButtonText(lang.post.copy_code)
        },1500)
      })
      .catch(() => {
        setButtonText(lang.post.copy_code_success)

        setTimeout(()=> {
          setButtonText(lang.post.copy_code)
        },1500)
      });
  }

  return (
    <section className="flex flex-col gap-0">
      <div className="border items-center bg-light-blue-50/20 dark:bg-dark-blue-700/20 border-light-blue-200 border-b-light-blue-50 dark:border-b-dark-blue-700 dark:border-dark-blue-500 rounded-b-none !rounded-t-md p-2 flex justify-between text-xs text-light-primary dark:text-white">
        <p className="!m-0 text-sm">
          {lang.post.language} <b className="uppercase">{onlyLang}</b>
        </p>
        <button
          onClick={copyCode}
          className="px-2 py-1 rounded-sm bg-light-blue-50/50 dark:bg-dark-blue-600 dark:hover:bg-dark-blue-700 hover:bg-light-blue-100 active:scale-95 transition-all dark:text-dark-blue-100"
        >
          <span>{buttonText}</span>
        </button>
      </div>
      <pre
        {...props}
        className={`border border-light-blue-200 border-t-0 dark:border-dark-blue-500 rounded-b !rounded-t-none !m-0`}
      >
        <code className={`${currentLang}`}>{children.props.children}</code>
      </pre>
    </section>
  );
}
