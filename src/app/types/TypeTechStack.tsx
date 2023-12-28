import { IconType } from "react-icons";

type Tech = {
  text: string;
  show: boolean;
  icon: IconType;
};

type TechStack = {
  [key: string]: {
    text: string;
    show: boolean;
    icon: IconType;
  };
};

export type { TechStack, Tech };
