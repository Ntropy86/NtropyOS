import "../styles/globals.css";

import Metadata from "components/pages/Metadata";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Metadata />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
