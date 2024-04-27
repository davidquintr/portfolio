import { getDictionary } from "@/app/[lang]/dictionaries";
import NotFoundCat from "@/app/components/not_found_cat";
import createPageMetadata from "@/app/sources/metadata";
import { Metadata } from "next";

export default function NotFound() {
  return (
    <NotFoundCat lang="en" type="blog" />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary('en');

  return createPageMetadata({
    title: dict.not_found.joke + ' mewing',
    thumbnail: dict.not_found.thumbnail,
    page: {
      title: '404',
      description: '',
    },
  });
}