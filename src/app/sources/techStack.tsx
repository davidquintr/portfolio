import {
  SiPhp,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiSass,
  SiReact,
  SiDotnet,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiGtk,
  SiUnity,
  SiVisualbasic,
  SiMicrosoftsqlserver,
  SiMysql,
  SiCplusplus,
  SiGit,
  SiMarkdown,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandKotlin, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TechStack } from "../types/TypeTechStack";

const techStack: TechStack = {
  html: {
    text: "HTML5",
    show: true,
    icon: SiHtml5,
  },
  css: {
    text: "CSS3",
    show: true,
    icon: SiCss3,
  },
  javascript: {
    text: "JavaScript",
    show: true,
    icon: IoLogoJavascript,
  },
  nextjs: {
    text: "Next.js",
    show: true,
    icon: TbBrandNextjs,
  },
  dotnet: {
    text: ".NET",
    show: true,
    icon: SiDotnet,
  },
  php: {
    text: "PHP",
    show: true,
    icon: SiPhp,
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
    icon: TbBrandKotlin,
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
  markdown: {
    text: "Markdown",
    show: false,
    icon: SiMarkdown,
  },
  tailwind: {
    text: "TailwindCSS",
    show: true,
    icon: SiTailwindcss,
  },
};

export default techStack;
