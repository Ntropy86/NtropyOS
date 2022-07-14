// import HelloWorld from "components/apps/HelloWorld";
import ProcessLoader from "contexts/process";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home - OS</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <ProcessLoader />
    </div>
  );
};

export default Home;
