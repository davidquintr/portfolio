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
  SiVuedotjs,
  SiWordpress,
  SiNuxtdotjs,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandKotlin, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TechStack } from "../types/TypeTechStack";

const techStack: TechStack = {
  html: {
    text: "HTML5",
    icon: SiHtml5,
  },
  css: {
    text: "CSS3",
    icon: SiCss3,
  },
  javascript: {
    text: "JavaScript",
    icon: IoLogoJavascript,
  },
  nextjs: {
    text: "Next.js",
    icon: TbBrandNextjs,
  },
  dotnet: {
    text: ".NET",
    icon: SiDotnet,
  },
  php: {
    text: "PHP",
    icon: SiPhp,
  },
  sass: {
    text: "SASS",
    icon: SiSass,
  },
  react: {
    text: "React",
    icon: SiReact,
  },
  illustrator: {
    text: "Adobe Illustrator",
    icon: SiAdobeillustrator,
  },
  photoshop: {
    text: "Adobe Photoshop",
    icon: SiAdobephotoshop,
  },
  csharp: {
    text: "C#",
    icon: TbBrandCSharp,
  },
  gtk: {
    text: "GTK",
    icon: SiGtk,
  },
  unity: {
    text: "Unity",
    icon: SiUnity,
  },
  kotlin: {
    text: "Kotlin",
    icon: TbBrandKotlin,
  },
  visualbasic: {
    text: "Visual Basic",
    icon: SiVisualbasic,
  },
  sqlserver: {
    text: "Microsoft SQL Server",
    icon: SiMicrosoftsqlserver,
  },
  mysql: {
    text: "MySQL",
    icon: SiMysql,
  },
  cplusplus: {
    text: "C++",
    icon: SiCplusplus,
  },
  git: {
    text: "Git",
    icon: SiGit,
  },
  markdown: {
    text: "Markdown",
    icon: SiMarkdown,
  },
  tailwind: {
    text: "TailwindCSS",
    icon: SiTailwindcss,
  },
  vuejs: {
    text: "Vue.js",
    icon: SiVuedotjs
  },
  wordpress: {
    text: "WordPress",
    icon: SiWordpress
  },
  nuxtjs: {
    text: "Nuxt.js",
    icon: SiNuxtdotjs,
  }
};

export default techStack;
