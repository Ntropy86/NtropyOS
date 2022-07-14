import type { FC } from "react";
import processDirectory from "utils/processDirectory";
// const ProcessContext = createContext({});

// <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
//         <h1 className="text-black text-5xl text-center">Hello World</h1>
//       </main>

const ProcessLoader: FC = () => {
  return (
    <>
      {Object.entries(processDirectory).map(([id, { Component }]) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default ProcessLoader;
