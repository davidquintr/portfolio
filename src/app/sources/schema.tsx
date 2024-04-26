import { getDictionary } from "../[lang]/dictionaries";
import external from "./external"

const en = getDictionary('en')

const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": en.author,
    "url": external.domain,
    "image": `${external.domain}davidquint-photo.png`,
    "sameAs": [
      "https://github.com/davidquintr",
      "https://www.linkedin.com/in/david-quintanilla-ruiz-a41044231/",
    ],
    "jobTitle": "Software Consultant",
    "worksFor": {
      "@type": "Organization",
      "name": "OOQIA"
    }
}

export default schema;