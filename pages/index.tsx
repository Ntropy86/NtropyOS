// import HelloWorld from "components/apps/HelloWorld";
import ProcessLoader from "components/system/ProcessLoader";
import { ProcessProvider } from "contexts/process";
import { SessionProvider } from "contexts/sessions";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <SessionProvider>
      <ProcessProvider>
        <ProcessLoader />
      </ProcessProvider>
    </SessionProvider>
  );
};

export default Home;
