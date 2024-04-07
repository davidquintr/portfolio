interface IboxContent {
  title: string;
  className: string;
}

export default function BoxContent({
  title,
  className,
  children,
}: IboxContent & { children: React.ReactNode }) {
  return (
    <section
      className={`${className} animate-fade-right animate-linear animate-duration-500 flex flex-col gap-2`}
    >
      { title && <h2 className="font-bold text-2xl text-light-primary">
        {title}
      </h2>}
      <div className="text-light-schema-text">{children}</div>
    </section>
  );
}
