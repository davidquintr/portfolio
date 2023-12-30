const PAGE_PREFIX = "DavidQuint's Portfolio";
const PAGE_DESCRIPTION =
  "Hello! I'm David Quintanilla Ruiz, a programmer who also dabbles in the world of design. I consider myself a fast learner, easily adaptable to the current needs.";

const MetadataBase = {
  metadataBase: new URL("https://davidquintr.vercel.app/"),
  description: PAGE_DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
  },
};

const MetadataOg = {
  openGraph: {
    description: PAGE_DESCRIPTION,
    url: "https://davidquintr.vercel.app/",
    sitename: PAGE_PREFIX,
    images: [
      {
        url: "https://davidquintr.vercel.app/thumbnail-full.png",
        width: 1600,
        height: 900,
        alt: `Thumbnail - ${PAGE_PREFIX}`,
      },
    ],
    type: "website",
  },
};

const createPageMetadata = (pageTitle: string) => ({
  title: `${PAGE_PREFIX} | ${pageTitle}`,
  ...MetadataBase,
  openGraph: {
    title: `${PAGE_PREFIX} | ${pageTitle}`,
    ...MetadataOg,
  },
});

const MetadataHome = createPageMetadata("Home");
const MetadataBlog = createPageMetadata("Blog");
const MetadataProjects = createPageMetadata("Projects");
const MetadataContact = createPageMetadata("Contact");

export { MetadataHome, MetadataBlog, MetadataProjects, MetadataContact };
