import Metadata from "components/pages/Metadata";
// import Head from "next/head";

const HelloWorld = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Metadata description="Home" title="Neat - OS" />

      <main>
        <h1 className="text-black text-5xl text-center">Hello World</h1>
      </main>
    </div>
  );
};

export default HelloWorld;
