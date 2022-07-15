// import HelloWorld from "components/apps/HelloWorld";
import ProcessLoader from "components/system/ProcessLoader";
import { ProcessProvider } from "contexts/process";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
};

export default Home;
