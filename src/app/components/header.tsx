import Image from "next/image";
import en from "../sources/en";
import techStack from "../sources/techStack";

export default function Header() {
  const showTech = [
    techStack.html,
    techStack.css,
    techStack.javascript,
    techStack.nextjs,
    techStack.php,
    techStack.mysql,
    techStack.tailwind,
  ];

  return (
    <header className="max-w-[1360px] w-full mx-auto">
      <div className="flex-col border sm:mx-4 bg-white dark:bg-black border-light-blue-200 dark:border-dark-blue-200 rounded-t-lg p-2.5 sm:p-5 dark:bg-dark-gradient flex justify-center gap-6 min-h-[240px] items-center sm:flex-row">
        <Image
          className="rounded-full size-[200px]"
          src="/davidquint-photo.png"
          quality={20}
          width={200}
          sizes="(max-width: 768px) 28vw, (max-width: 1200px) 18vw, 20vw"
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
        {showTech.map((tech, index) => (
          <tech.icon size="36" key={index} />
        ))}
      </div>
    </header>
  );
}
