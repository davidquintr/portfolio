import {
  SiPhp,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiDotnet,
} from "react-icons/si";
import { TechStack } from "../types/TypeTechStack";

const techStack: TechStack = {
  php: {
    text: "PHP",
    show: true,
    icon: SiPhp,
  },
  tailwind: {
    text: "TailwindCSS",
    show: true,
    icon: SiTailwindcss,
  },
  css: {
    text: "CSS3",
    show: true,
    icon: SiCss3,
  },
  html: {
    text: "HTML5",
    show: true,
    icon: SiHtml5,
  },
  sass: {
    text: "SASS",
    show: true,
    icon: SiSass,
  },
  react: {
    text: "React",
    show: true,
    icon: SiReact,
  },
  nextjs: {
    text: "Next.js",
    show: true,
    icon: SiNextdotjs,
  },
  dotnet: {
    text: ".NET",
    show: true,
    icon: SiDotnet,
  },
};

export default techStack;
