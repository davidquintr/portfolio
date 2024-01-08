import { getPostMetadata } from "../utils/postMetaData";
import external from "./external";
const PAGE_PREFIX = "DavidQuint's Portfolio";

export const PostMetadata = (slug?: string): any => {
  const posts = getPostMetadata();
  const blog = posts.find((p) => p.slug == slug);
  const image = `${external.domain}blog/${blog?.slug}.png`;
  const site = new URL(`/post/${blog?.slug}`, external.domain).href;
  return {
    title: blog?.title,
    metadataBase: site,
    description: blog?.description,
    icons: {
      icon: [
        { url: "/icon_light.png" },
        { url: "/icon_dark.png", media: "(prefers-color-scheme: dark)" },
      ],
    },
    openGraph: {
      title: blog?.title,
      description: blog?.description,
      url: site,
      sitename: PAGE_PREFIX,
      images: [
        {
          url: image,
        },
      ],
      type: "website",
    },
    twitter: {
      title: blog?.title,
      card: "summary_large_image",
      description: blog?.description,
      images: [image],
    },
  };
};
