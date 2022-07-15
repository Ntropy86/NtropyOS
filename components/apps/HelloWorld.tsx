import Head from "next/head";

const HelloWorld = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home - OS</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1 className="text-black text-5xl text-center">Hello World</h1>
      </main>
    </div>
  );
};

export default HelloWorld;
