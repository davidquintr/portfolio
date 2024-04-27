import NotFoundCat from "@/app/components/not_found_cat";

export default function NotFound({
  params: { lang },
}: {
  params: { lang: string };
}) {

  return (
    <NotFoundCat type="pages" lang={lang} />
  );
}