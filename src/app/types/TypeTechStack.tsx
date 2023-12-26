import { IconType } from "react-icons";

type TechStack = {
  [key: string]: {
    text: string;
    show: boolean;
    icon: IconType;
  };
};

export default TechStack;
