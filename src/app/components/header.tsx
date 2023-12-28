import Image from "next/image";
import en from "../sources/en";
import techStack from "../sources/techStack";

export default function Header() {
  return (
    <header className="max-w-[1360px] w-full mx-auto">
      <div className="flex-col border sm:mx-4 bg-black border-dark-blue-200 rounded-t-lg p-2.5 sm:p-5 bg-dark-gradient-bg flex justify-center gap-6 min-h-[240px] items-center sm:flex-row">
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
          <h1 className="font-bold text-3xl text-dark-blue-100">{en.author}</h1>
          <p>{en.role}</p>
        </div>
      </div>
      <div className="sm:mx-4 flex gap-2 border bg-dark-gradient-bg border-t-0 border-dark-blue-200 rounded-b-lg p-2.5 px-2.5 flex-wrap justify-center">
        {Object.keys(techStack).map((techKey, index) => {
          const tech = techStack[techKey];
          return tech.show && <tech.icon size="36" key={index} />;
        })}
      </div>
    </header>
  );
}
