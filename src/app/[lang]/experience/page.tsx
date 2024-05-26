import BoxContent from "../../components/boxContent";
import TechItem from "../../components/tech_item";
import Image from "next/image";
import createPageMetadata from "../../sources/metadata";
import { Metadata } from "next";
import { getDictionary } from "../dictionaries";
import techStack from "../../sources/techStack";

interface IPositions {
  name: string;
  tasks: string[];
  index: number;
  max: number;
}

export default function Experience({ params: { lang } } : {params: { lang: string}}) {
  const dict = getDictionary(lang)

  return (
    <BoxContent title={dict.experience.title} className="">
      <ul>
        {dict.experience.list.reverse().map((ex, index) => (
          <li
            style={{ animationDelay: (index * 75).toString().concat("ms") }}
            key={index}
            className="flex sm:flex-row flex-col gap-2 items-start mb-2 animate-fade-right animate-ease-in-out animate-duration-500 animate-once"
          >
            <picture className="p-4 bg-white rounded-md w-full max-w-[100px]">
              <Image
                alt={ex.place}
                src={ex.image}
                width={84}
                height={84}
                className="aspect-square object-contain"
              />
            </picture>
            <div>
              <h3 className="text-xl font-bold text-light-primary dark:text-white">
                {ex.place}
              </h3>
              <p className="text-sm mb-1 text-light-secondary dark:text-dark-gray-100">
                {ex.time}
              </p>
              <ul className="flex gap-1 flex-wrap mb-1">
                {ex.tech.map((tec, index) => (
                  <TechItem
                    height={10}
                    icon={techStack[tec].icon}
                    text={techStack[tec].text}
                    key={index}
                  />
                ))}
              </ul>
              <ul className="flex flex-col">
                {ex.positions.map((pos, index) => (
                  <Position max={ex.positions.length} key={index} index={index} name={pos.name} tasks={pos.tasks} />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </BoxContent>
  );
}

const Position = ({ name, tasks, index, max}: IPositions) => {
  return (
    <li className="pl-6 relative">
      <span className={`w-1 h-full top-[calc(50%_+_12px)] rounded-full -translate-y-1/2 dark:bg-dark-blue-700 bg-light-blue-200 absolute left-1.5 ${index > 0 || max == 1 ? 'hidden' : 'block'} `}></span>
      <div className="relative">
        <span className={`size-2.5 rounded-full bg-light-blue-300 dark:bg-dark-blue-100 absolute left-[-21px] top-[10px] ${max == 1 ? 'hidden' : 'block'}`}></span>
        <h4 className="font-semibold text-lg dark:text-white">{name}</h4>
      </div>
      <ul className="list-disc pl-8">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </li>
  );
};

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = getDictionary(lang);

  return createPageMetadata({
    title: dict.metadata.type,
    thumbnail: dict.metadata.thumbnail,
    page: {
      title: dict.metadata.experience.title,
      description: dict.metadata.experience.description,
    },
  });
}
