const PAGE_PREFIX = "DavidQuint's Portfolio";
const PAGE_DESCRIPTION =
  "Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs.";
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

export { MetadataHome, MetadataBlog, MetadataProjects, MetadataContact };
