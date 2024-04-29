import Head from "next/head";
import Redirect from "./components/redirect";


export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>{"Projects"}</title>

        <meta name="description" content="Projects I've personally worked on during my time in university."></meta>
        <meta property="og:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Portfolio | Projects"></meta>
        <meta property="og:description" content="Projects I've personally worked on during my time in university."></meta>
        <meta property="og:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://davidquintr.github.io/portfolio/"></meta>
        <meta name="twitter:title" content="Portfolio | Projects"></meta>
        <meta name="twitter:description" content="Projects I've personally worked on during my time in university."></meta>
        <meta name="twitter:image" content="https://davidquintr.github.io/portfolio/thumbnail.png"></meta>

      </Head>
      <Redirect href="projects" />
    </>
  );
}
