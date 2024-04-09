import ProjectsEn from "./projects_en";
import tech from "./techStack";

const en = {
  author: "David Quintanilla Ruiz",
  role: "Web Developer | UI/UX designer",
  email: "davidquintr@gmail.com",
  birthday: "2004/04/19",
  nationality: "Nicaraguan",
  country: "El Salvador",
  cvText: "Curriculum",
  detail_item: {
    open: "Open",
    emailText: "Email",
    birthdayText: "Birthday",
    countryText: "Country",
    nationality: "Nationality",
  },
  navigation: {
    home: "Home",
    blog: "Blog",
    projects: "Projects",
    contact: "Contact",
    experience: "Experience",
  },
  footer: {
    credits: "©2023-2024 Designed and Programmed by David Quintanilla",
    source: "View Source",
  },
  home: {
    about_me: {
      title: "About me",
      description: `Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs. I possess excellent communication skills and know how to lead teams effectively. My expertise lies in creating and designing web pages, particularly focusing on user interface and user experience.
      I served as a Project Manager for the development of the 'Expediente Docente' platform at the Universidad Centroamericana of Nicaragua, I'm currently employed as a Web Developer at OOQIA and not seeking new positions.
      Among my interests are playing video games, watching technology videos, and occasionally drawing.`,
    },
    personal_info: {
      title: "Personal Info",
    },
    tech_stack: {
      title: "Tech Stack",
    },
    applications: {
      title: "Applications",
    },
  },
  experience: {
    title: " Experience",
    list: [
      {
        place: "Universidad Centroamericana",
        image: "/experience/Universidad-Centroamericana.png",
        positions: [
          {
            name: "Project Manager",
            tasks: `Development of the "Expediente Docente” system was an entire system designed for the management of college teachers, which included their personal information and academic records.
            Leading a team and managing task schedules to deliver results to the final client.
            Standardization of mechanism, styles and documentation for future projects on the University.
            Total freedom with the UI/UX design, the result is a fluent, clean and modern view to the final user.`,
          },
        ],
        location: "Managua, Nicaragua",
        time: "September 2022 - August 2022",
        tech: [
          tech.html,
          tech.css,
          tech.javascript,
          tech.dotnet,
          tech.sqlserver,
        ],
      },
      {
        place: "OOQIA",
        image: "/experience/OOQIA.jpeg",
        positions: [
          {
            name: "Web Development Intern",
            tasks: `Development of WordPress themes and templates from scratch tailored to meet client needs, creation of plugins, and standardization of processes for future projects.
            Support past projects, implement new features, optimize website performance, conduct code reviews, and address design issues, ensuring quality and UI/UX efficiency.
            Company website remodeling, focusing on proof of concept and implementation of new features, SEO enhancements, and integration of filters for use in Google Analytics.
            UI/UX development using Figma, based on designs and styles predetermined by The client.`,
          },
          {
            name: "Software Consultant",
            tasks: `Automated “graphic design system" for developing new pages based on client requirements.
            UI/UX development using Figma, based on designs and styles predetermined by the client.`,
          },
        ],
        location: "Managua, Nicaragua",
        time: "September 2023 - Present",
        tech: [
          tech.wordpress,
          tech.html,
          tech.css,
          tech.javascript,
          tech.php,
          tech.tailwind,
          tech.sass,
          tech.vuejs,
          tech.nuxtjs,
          tech.mysql,
        ],
      },
    ],
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
    cta: "Looking for support or have questions? Feel free to contact me!",
    share_my: "If you want to help my work:",
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
    share: "Share my post!",
  },
};

export default en;
