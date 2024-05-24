import {Person} from 'schema-dts';
import { getDictionary } from '../[lang]/dictionaries';
import external from "./external"

const en = getDictionary('en')

const person: Person = {    
    "@type": "Person",
    name: en.author,
    url: external.domain,
    image: `${external.domain}davidquint-photo.png`,
    sameAs: [
      "https://github.com/davidquintr",
      "https://www.linkedin.com/in/david-quintanilla-ruiz-a41044231/",
    ],
    jobTitle: "Software Consultant",
    worksFor: {
      "@type": "Organization",
      "name": "OOQIA"
    },
    knowsAbout: ["Software Development", "Web Development"],
    gender: "Male",
    knowsLanguage: ["English", "Spanish"],
    alumniOf: {
        "@type": "Organization",
        name: "Universidad Centroamericana"
    },
    birthDate: "2004-04-19",
};

export default person