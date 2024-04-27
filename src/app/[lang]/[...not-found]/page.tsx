import NotFoundCat from "@/app/components/not_found_cat";
import { getDictionary } from "../dictionaries";
import { Metadata } from "next";
import createPageMetadata from "@/app/sources/metadata";

export default function NotFound({
  params: { lang },
}: {
  params: { lang: string };
}) {

  return (
    <NotFoundCat type="pages" lang={lang} />
  );
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = getDictionary(lang);

  return createPageMetadata({
    title: dict.not_found.joke + ' mewing',
    thumbnail: dict.not_found.thumbnail,
    page: {
      title: '404',
      description: '',
    },
  });
}