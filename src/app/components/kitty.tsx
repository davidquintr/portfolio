import Image from "next/image";

export default function Kitty() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <Image alt="kitty" src="/kitty.png" width={264} height={240} />
      <div className="flex flex-col items-center md:items-start justify-center text-light-blue-500 text-left dark:text-dark-blue-100">
        <p className="text-3xl">Not available</p>
        <p className="text-[48px] font-bold">Coming soon!</p>
      </div>
    </div>
  );
}
