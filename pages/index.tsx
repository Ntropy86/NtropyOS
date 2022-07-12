// import HelloWorld from "components/apps/HelloWorld";
import type { NextPage } from "next";
import Head from "next/head";
import processDirectory from "utils/processDirectory";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home - OS</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {/* <h1 className="text-black text-5xl text-center">Hello World</h1> */}
        <processDirectory.HelloWorld.Component />
      </main>
    </div>
  );
};

export default Home;
