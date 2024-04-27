import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex justify-center items-center flex-1">
      <div className="flex flex-col items-center justify-center md:flex-row max-w-[70%] mx-auto gap-3">
        <div className="h-60 bg-no-repeat bg-center bg-contain w-40 bg-[url(/shh_light.webp)] dark:bg-[url(/shh_dark.webp)]"></div>
        <div className="flex flex-col items-center gap-2 md:items-start justify-center text-light-blue-500 text-left dark:text-dark-gray ">
          <p className="text-3xl text-center md:text-left">Shhh... the cat is</p>
          <p className="text-9xl font-bold dark:text-dark-blue-400">404</p>
          <Link className="px-8 w-full text-center py-2 rounded-lg dark:bg-dark-blue-700 dark:hover:bg-dark-blue-650 dark:text-dark-blue-200 bg-dark-blue-200 active:scale-95 hover:bg-dark-blue-500 transition-all" href={'/blog'}>Back to Blog Posts</Link>
        </div>
      </div>{" "}
    </section>
  );
}