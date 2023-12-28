import {
  SiPhp,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiJavascript,
  SiCsharp,
  SiGtk,
  SiUnity,
  SiKotlin,
  SiVisualbasic,
  SiMicrosoftsqlserver,
  SiMysql,
  SiCplusplus,
  SiGit,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";

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
    show: false,
    icon: SiSass,
  },
  react: {
    text: "React",
    show: false,
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
  illustrator: {
    text: "Adobe Illustrator",
    show: false,
    icon: SiAdobeillustrator,
  },
  photoshop: {
    text: "Adobe Photoshop",
    show: false,
    icon: SiAdobephotoshop,
  },
  javascript: {
    text: "JavaScript",
    show: true,
    icon: IoLogoJavascript,
  },
  csharp: {
    text: "C#",
    show: false,
    icon: TbBrandCSharp,
  },
  gtk: {
    text: "GTK",
    show: false,
    icon: SiGtk,
  },
  unity: {
    text: "Unity",
    show: false,
    icon: SiUnity,
  },
  kotlin: {
    text: "Kotlin",
    show: false,
    icon: SiKotlin,
  },
  visualbasic: {
    text: "Visual Basic",
    show: false,
    icon: SiVisualbasic,
  },
  sqlserver: {
    text: "Microsoft SQL Server",
    show: false,
    icon: SiMicrosoftsqlserver,
  },
  mysql: {
    text: "MySQL",
    show: true,
    icon: SiMysql,
  },
  cplusplus: {
    text: "C++",
    show: false,
    icon: SiCplusplus,
  },
  git: {
    text: "Git",
    show: true,
    icon: SiGit,
  },
};

export default techStack;
