import BoxContent from "./components/boxContent";

export default function Home() {
  return (
    <article className="grid sm:grid-cols-5 gap-2.5 w-full">
      <BoxContent className="sm:col-span-5" title="perro">
        <p>Me gustan los gatitos</p>
      </BoxContent>
      <BoxContent className="sm:col-span-3" title="perro">
        <p>Me gustan los gatitos</p>
      </BoxContent>
      <BoxContent className="sm:col-span-2" title="perro">
        <p>Me gustan los gatitos</p>
      </BoxContent>
    </article>
  );
}
