import { IconType } from "react-icons";

type Tech = {
  text: string;
  icon: IconType;
};

type TechStack = {
  [key: string]: {
    text: string;
    icon: IconType;
  };
};

export type { TechStack, Tech };
