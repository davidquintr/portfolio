const PAGE_PREFIX = "DavidQuint's Portfolio";
const PAGE_DESCRIPTION =
  "Hello! David Quintanilla Ruiz here, a programmer with design skills. Experienced in web development and design, proficient in communication and adept at team leadership and great making captivating user interfaces and enhancing user experiences.";
const PAGE_URL = "https://davidquintr.com/";

const MetadataBase = {
  default: {
    metadataBase: new URL(PAGE_URL),
    description: PAGE_DESCRIPTION,
    icons: {
      icon: [
        { url: "/icon_light.svg" },
        { url: "/icon_dark.svg", media: "(prefers-color-scheme: dark)" },
      ],
    },
  },
  openGraph: {
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    sitename: PAGE_PREFIX,
    images: [
      {
        url: `${PAGE_URL}thumbnail.webp`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: PAGE_DESCRIPTION,
    images: [`${PAGE_URL}thumbnail.webp`],
  },
};

const createPageMetadata = (pageTitle: string) => ({
  title: `${PAGE_PREFIX} | ${pageTitle}`,
  ...MetadataBase.default,
  openGraph: {
    title: `${PAGE_PREFIX} | ${pageTitle}`,
    ...MetadataBase.openGraph,
  },
  twitter: {
    title: `${PAGE_PREFIX} | ${pageTitle}`,
    ...MetadataBase.twitter,
  },
});

const MetadataHome = createPageMetadata("Home");
const MetadataBlog = createPageMetadata("Blog");
const MetadataProjects = createPageMetadata("Projects");
const MetadataContact = createPageMetadata("Contact");
const MetadataExperience = createPageMetadata("Experience");

export { MetadataHome, MetadataBlog, MetadataProjects, MetadataContact, MetadataExperience };
