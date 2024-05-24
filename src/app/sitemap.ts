import { MetadataRoute } from "next";
import { getPostMetadata } from "./utils/postMetaData";
import external from "./sources/external";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPostMetadata();
  const parsedPages: SitemapItem[] = [];

  interface SitemapItem {
    url: string;
    lastModified?: string | Date;
    changeFrequency?:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority?: number;
    alternates?: {
      languages?: Languages<string>;
    };
  }

  posts.forEach((post) => {
    parsedPages.push({
      url: external.domain + "post/" + post.slug,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.5,
    });
  });

  external.pages.forEach((page) => {
    const languages = external.languages.reduce(
      (acc: { [key: string]: string }, lang: string) => {
        const langKey = lang.replace("/", "");
        acc[langKey] = `${external.domain}${lang}${page}`;
        return acc;
      },
      {}
    );

    parsedPages.push({
      url: external.domain + page,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: languages,
      },
    });
  });

  return parsedPages;
}
