import Head from "next/head";
import Redirect from "./redirect";

const HomePage = () => {
  let title = "home"

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="article">
      <Redirect href="" />
      </article>
    </>
  );
};

export default HomePage;
