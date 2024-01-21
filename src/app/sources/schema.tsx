import en from "./en"
import external from "./external"

const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": en.author,
    "url": external.domain,
    "image": `${external.domain}davidquint-photo.png`,
    "sameAs": [
      external.social_media[0].link,
      external.social_media[1].link,
    ],
    "jobTitle": en.home.experience.list[1].position,
    "worksFor": {
      "@type": "Organization",
      "name": en.home.experience.list[1].name
    }
}

export default schema;