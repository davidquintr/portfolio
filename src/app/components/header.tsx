import Image from "next/image";
import en from "../sources/en";
import techStack from "../sources/techStack";

export default function Header() {
  return (
    <header className="max-w-[1360px] w-full mx-auto">
      <div className="flex-col border sm:mx-4 bg-white dark:bg-black border-light-blue-200 dark:border-dark-blue-200 rounded-t-lg p-2.5 sm:p-5 dark:bg-dark-gradient flex justify-center gap-6 min-h-[240px] items-center sm:flex-row">
        <Image
          className="rounded-full"
          src="/davidquint-photo.png"
          width={200}
          priority={true}
          height={200}
          alt={en.author}
          title={en.author}
        />
        <div className="gap-1 text-center flex flex-col justify-center sm:text-left">
          <h1 className="font-bold text-3xl text-light-blue-400 dark:text-dark-blue-100">
            {en.author}
          </h1>
          <p className="text-light-black dark:text-white">{en.role}</p>
        </div>
      </div>
      <div className="sm:mx-4 dark:bg-black bg-light-blue-500 text-white border-light-blue-200 flex gap-2 border dark:bg-dark-gradient border-t-0 dark:border-dark-blue-200 rounded-b-lg p-2.5 px-2.5 flex-wrap justify-center">
        {Object.keys(techStack).map((techKey, index) => {
          const tech = techStack[techKey];
          return tech.show && <tech.icon size="36" key={index} />;
        })}
      </div>
    </header>
  );
}
