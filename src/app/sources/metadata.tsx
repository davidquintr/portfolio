import external from "./external";

const PAGE_URL = external.domain;

interface Props {
  title: string
  thumbnail: string
  page: {
    title: string
    description: string
  }
}

function createPageMetadata({title, thumbnail, page}: Props){
  return {
    title: `${title} | ${page.title}`,
    metadataBase: new URL(PAGE_URL),
    description: page.description,
    icons: {
      icon: [
        { url: "/icon_light.svg" },
        { url: "/icon_dark.svg", media: "(prefers-color-scheme: dark)" },
      ],
    },
    openGraph: {
      title: `${title} | ${page.title}`,
      description: page.description,
      url: PAGE_URL,
      sitename: page.title,
      images: [
        {
          url: `${PAGE_URL}${thumbnail}`,
        },
      ],
      type: "website",
    },
    twitter: {
      title: `${title} | ${page.title}`,
      card: "summary_large_image",
      description: page.description,
      images: [`${PAGE_URL}${thumbnail}`],
    },
  }
}

export default createPageMetadata;