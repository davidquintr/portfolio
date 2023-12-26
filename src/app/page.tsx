import BoxContent from "./components/boxContent";
import en from "./sources/en";

export default function Home() {
  return (
    <article className="grid sm:grid-cols-5 gap-2.5 w-full">
      <BoxContent className="sm:col-span-5" title="perro">
        <p>Me gustan los gatitos</p>
      </BoxContent>
      <BoxContent className="sm:col-span-3" title={en.home.about_me.title}>
        {en.home.about_me.description.split("\n").map((paragraph, index) => (
          <p className="text-dark-gray mb-4" key={index}>
            {paragraph}
          </p>
        ))}
      </BoxContent>
      <BoxContent className="sm:col-span-2" title={en.home.personal_info.title}>
        <p>Me gustan los gatitos</p>
      </BoxContent>
    </article>
  );
}
