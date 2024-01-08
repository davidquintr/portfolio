import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center md:flex-row max-w-[70%] mx-auto gap-3">
        <Image alt="kitty" src="/confused-cat.png" width={264} height={240} />
        <div className="flex flex-col items-center gap-2 md:items-start justify-center text-light-blue-500 text-left dark:text-dark-gray ">
          <p className="text-3xl text-center md:text-left">You are looking in a wrong site... let&rsquo;s back to home.</p>
          <Link className="px-8 py-2 rounded-lg bg-dark-blue-200 active:scale-95 hover:bg-dark-blue-500 transition-all" href={'./'}>Back to Home</Link>
        </div>
      </div>{" "}
    </section>
  );
}
