import BoxContent from "../components/boxContent";
import TechItem from "../components/tech_item";
import en from "../sources/en";
import Image from "next/image";
import { MetadataExperience } from "../sources/metadata_en";
import { Metadata } from "next";

interface IPositions {
  name: string;
  tasks: string;
}

export default function Experience() {
  return (
    <BoxContent title={en.experience.title} className="">
      <ul>
        {en.experience.list.reverse().map((ex, index) => (
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
                    icon={tec.icon}
                    text={tec.text}
                    key={index}
                  />
                ))}
              </ul>
              <ul>
                {ex.positions.reverse().map((pos, index) => (
                  <Position key={index} name={pos.name} tasks={pos.tasks} />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </BoxContent>
  );
}

const Position = ({ name, tasks }: IPositions) => {
  return (
    <li className="mb-2 pl-4">
      <h4 className="font-semibold text-lg dark:text-white">{name}</h4>
      <ul className="list-disc pl-4">
        {tasks.split("\n").map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </li>
  );
};

export const metadata: Metadata = MetadataExperience;
