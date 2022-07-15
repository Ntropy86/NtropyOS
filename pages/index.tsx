// import HelloWorld from "components/apps/HelloWorld";
import WindowManager from "components/system/WindowManager";
import { ProcessProvider } from "contexts/process";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
};

export default Home;
