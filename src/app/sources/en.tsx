import techStack from "./techStack";

const en = {
  author: "David Quintanilla",
  role: "System Engineering Student, Programmer and UI/UX Designer",
  email: "davidquintr@gmail.com",
  birthday: "2004/04/19",
  country: "Nicaragua",
  detail_item: {
    open: "Open",
    emailText: "Email",
    birthdayText: "Birthday",
    countryText: "Country",
    cvText: "CV",
  },
  navigation: {
    home: "Home",
    blog: "Blog",
    projects: "Projects",
    contact: "Contact",
  },
  footer: {
    credits: "©2023 Designed and Programmed by David Quintanilla",
    source: "View Source",
  },
  home: {
    experience: {
      title: "Experience",
      list: {
        uca: {
          name: "Universidad Centroamericana",
          position: "Project Manager",
          time: "September 2022 - August 2022",
        },
        ooqia: {
          name: "OOQIA",
          position: "Web Developer Intern",
          time: "September 2023 - Present",
        },
      },
    },
    about_me: {
      title: "About me",
      description: `Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs. I possess excellent communication skills and know how to lead teams effectively. My expertise lies in creating and designing web pages, particularly focusing on user interface and user experience.
      I served as a Project Manager for the development of the 'Teacher's Record' platform at the Central American University in my country, Nicaragua.
      Currently, I'm a student of Systems Engineering at the Central American University of Nicaragua, expecting to complete my studies by 2026. Among my interests are playing video games, watching technology videos, and occasionally drawing.`,
    },
    personal_info: {
      title: "Personal Info",
    },
  },
  projects: {
    title: "Projects",
    onlineText: "Watch Online",
    sourceText: "View Source",
    moreText: "More Info",
    list: {
      blog_js_jquery: {
        title: "Blog - JavaScript / JQuery",
        description: "Created for Web Applications Development in 2S-2022",
        techs: [techStack.php],
        gallery: ["/blog-1.png"],
        sourceLink: "https://github.com/davidquintr/whatsapp-reader.github.io",
        onlineLink: "https://davidquintr.github.io/teamfactorizacion-blog/",
        moreLink: "",
      },
      brain_view: {
        title: "BrainView - 3D",
        description:
          "Created as commission - Basic view of limited points of the brain, internal and external.",
        techs: [techStack.php],
        gallery: ["/brainview-1.png"],
        sourceLink: "https://github.com/davidquintr/brain-3d",
        onlineLink: "",
        moreLink: "",
      },
      expedoc: {
        title: "Expediente Docente",
        description:
          "My first job experience in Software Development. This works like a teacher manager or internal social media for a college, including self system of feedback and a historical register of teachers.",
        techs: [techStack.php],
        gallery: ["/expedoc-1.png"],
        sourceLink: "",
        onlineLink: "",
        moreLink:
          "https://davidquintr.github.io/portfolio/blog/expedoc-development",
      },
      old_portfolio: {
        title: "Old Portfolio",
        description:
          "Created for collection of my projects in the development of my universitary career and self-learn.",
        techs: [techStack.php],
        gallery: ["/portafolio-1.png"],
        sourceLink: "https://github.com/davidquintr/old-portfolio",
        onlineLink: "https://davidquintr.github.io/old-portfolio/",
        moreLink: "",
      },
      simple_documentation: {
        title: "Simple Documentation",
        description:
          "Personal project, to create simple documentation through Markdown. It can interpreats code lines and does not requires page reload for change of article.",
        techs: [techStack.php],
        gallery: ["/simple-documentation-1.png"],
        sourceLink: "https://github.com/davidquintr/simple-documentation",
        onlineLink: "https://davidquintr.github.io/simple-documentation/",
        moreLink: "",
      },
      taskitty: {
        title: "Taskitty",
        description:
          "Created for Mobile Applications Development I in 1S-2022, developed with Kotlin in Android Studio.",
        techs: [techStack.php],
        gallery: ["/taskitty-1.png"],
        sourceLink: "https://github.com/VarEros/TasKitty",
        onlineLink: "https://poncka.github.io/tasKitty-web.github.io/",
        moreLink: "",
      },
    },
  },
};

export default en;
