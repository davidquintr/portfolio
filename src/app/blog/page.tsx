import BoxContent from "../components/boxContent";
import Kitty from "../components/kitty";
import en from "../sources/en";
import Image from "next/image";

export default function Blog() {
  return (
    <BoxContent title={en.blog.title} className="">
      <Kitty />
    </BoxContent>
  );
}
