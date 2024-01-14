import ProjectsEn from "./projects_en";
import tech from "./techStack";

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
    credits: "©2023-2024 Designed and Programmed by David Quintanilla",
    source: "View Source",
  },
  home: {
    experience: {
      title: "Relevant Experience",
      list: [
        {
          name: "Universidad Centroamericana",
          position: "Project Manager",
          location: "Managua, Nicaragua",
          time: "September 2022 - August 2022",
          tech: [tech.html, tech.css, tech.javascript,tech.dotnet, tech.sqlserver],
          description: `- Development of Web Platform 'Expediente Docente' for the Department of Education of the confiscated Universidad Centroamericana`
        },
        {
          name: "OOQIA",
          position: "Web Developer Intern",
          location: "Managua, Nicaragua",
          time: "September 2023 - Present",
          tech: [tech.wordpress, tech.html, tech.css, tech.javascript, tech.sass, tech.vuejs, tech.nuxtjs, tech.mysql],
          description: `- Development of WordPress themes, improvements and support for the customers of OOQIA.
          - Building strong websites for effective SEO performance and smooth UI/UX.`
        },
      ],
    },
    about_me: {
      title: "About me",
      description: `Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs. I possess excellent communication skills and know how to lead teams effectively. My expertise lies in creating and designing web pages, particularly focusing on user interface and user experience.
      I served as a Project Manager for the development of the 'Expediente Docente' platform at the Universidad Centroamericana of Nicaragua, I'm currently employed as a Web Developer at OOQIA and not seeking new positions.
      Among my interests are playing video games, watching technology videos, and occasionally drawing.`,
    },
    personal_info: {
      title: "Personal Info",
    },
  },
  projects: {
    title: "Projects",
    onlineText: "Watch Online",
    sourceText: "View Source",
    moreText: "Know More",
    list: ProjectsEn,
  },
  blog: {
    title: "Blog",
  },
  contact: {
    title: "Contact",
    cta: "If you are looking for help with a project or need assistance, you can contact me!",
    direct_comm:
      "Do you want more direct communication? There's another way to contact me:",
    form: {
      names: "First Name and Last Name",
      email: "Email",
      message: "Message",
      success:
        "Your email was sent successfully. You will receive a response soon!",
      fail: "Something went wrong, try later...",
      send: "Send Message",
    },
  },
  post: {
    author: "Author",
    share: "Share my post!"
  }
};

export default en;
