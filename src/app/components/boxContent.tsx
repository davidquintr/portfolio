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
      className={`${className} rounded-lg bg-dark-box border border-dark-blue-200 flex flex-col`}
    >
      <h1 className=" my-2.5 text-center font-bold text-2xl text-dark-blue-100">
        {title}
      </h1>
      <span className=" h-[1px] bg-dark-border-gradient"></span>
      <div className="m-5">{children}</div>
    </section>
  );
}
