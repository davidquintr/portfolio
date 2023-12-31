import ProjectsEs from "./projects_es";
import IDictionary from "../types/TypeDictionary";
const es: IDictionary = {
  lang: "es",
  author: "David Quintanilla",
  role: "Estudiante de Ingeniería de Sistemas, Programador y Diseñador UI/UX",
  email: "davidquintr@gmail.com",
  birthday: "19 de abril de 2004",
  country: "Nicaragua",
  detail_item: {
    open: "Abrir",
    emailText: "Correo",
    birthdayText: "Cumpleaños",
    countryText: "País",
    cvText: "CV",
  },
  navigation: {
    switch: "Cambiar a Inglés",
    home: "Inicio",
    blog: "Blog",
    projects: "Proyectos",
    contact: "Contacto",
  },
  footer: {
    credits: "©2023-2024 Diseñado y Programado por David Quintanilla",
    source: "Ver Código Fuente",
  },
  home: {
    experience: {
      title: "Experiencia",
      list: {
        uca: {
          name: "Universidad Centroamericana",
          position: "Gerente de Proyecto",
          time: "Septiembre 2022 - Agosto 2022",
        },
        ooqia: {
          name: "OOQIA",
          position: "Pasante de Desarrollador Web",
          time: "Septiembre 2023 - Presente",
        },
      },
    },
    about_me: {
      title: "Sobre Mí",
      description: `¡Hola! Soy David Quintanilla Ruiz, un programador que también se aventura en el mundo del diseño. Me considero un aprendiz rápido, fácilmente adaptable a las necesidades actuales. Poseo excelentes habilidades de comunicación y sé cómo liderar equipos de manera efectiva. Mi experiencia se centra en la creación y diseño de páginas web, enfocándome especialmente en la interfaz de usuario y la experiencia de usuario.
      Me desempeñé como Gerente de Proyecto en el desarrollo de la plataforma 'Registro del Profesor' en la Universidad Centroamericana en mi país, Nicaragua.
      Actualmente, soy estudiante de Ingeniería de Sistemas en la Universidad Centroamericana de Nicaragua, con expectativas de completar mis estudios para el 2026. Entre mis intereses se encuentran jugar videojuegos, ver videos de tecnología y ocasionalmente dibujar.`,
    },
    personal_info: {
      title: "Información Personal",
    },
  },
  projects: {
    title: "Proyectos",
    onlineText: "Ver en Línea",
    sourceText: "Ver Código",
    moreText: "Más Info",
    list: ProjectsEs,
  },
  blog: {
    title: "Blog",
  },
  contact: {
    title: "Contacto",
    cta: "Si estás buscando ayuda con un proyecto o necesitas asistencia, ¡puedes contactarme!",
    direct_comm:
      "¿Quieres una comunicación más directa? Hay otra forma de contactarme:",
    form: {
      names: "Nombre y Apellido",
      email: "Correo Electrónico",
      message: "Mensaje",
      success:
        "Tu correo electrónico se envió con éxito. ¡Recibirás una respuesta pronto!",
      fail: "Algo salió mal, inténtalo más tarde...",
      send: "Enviar Mensaje",
    },
  },
};

export default es;
