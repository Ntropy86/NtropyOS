import "../styles/globals.css";

import Metadata from "components/pages/Metadata";
import { SessionProvider } from "contexts/sessions";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Metadata />
      <SessionProvider>
        <Component {...pageProps} />;
      </SessionProvider>
      ;
    </>
  );
};

export default MyApp;
