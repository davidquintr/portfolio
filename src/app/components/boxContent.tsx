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
      className={`${className} bg-white rounded-lg animate-fade-right animate-linear animate-duration-500  border-light-blue-200 dark:bg-dark-box border dark:border-dark-blue-200 flex flex-col`}
    >
      { title && <h2 className=" my-2.5 text-center font-bold text-2xl text-light-blue-400 dark:text-dark-blue-100">
        {title}
      </h2>}
      { title && <span className=" h-[1px] bg-light-border-gradient dark:bg-dark-border-gradient"></span>}
      <div className="m-5">{children}</div>
    </section>
  );
}
