import ProjectsEn from "./projects_en";

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
      success: "Sent",
      fail: "Something went wrong, try later...",
      send: "Send Message",
    },
  },
};

export default en;
