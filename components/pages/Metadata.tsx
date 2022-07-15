import Head from "next/head";
import type { FC } from "react";
import React from "react";
import type { MetadataProps } from "types/pages/Metadata";

const Metadata: FC<MetadataProps> = ({ description, title }) => (
  <Head>
    <meta content={description} name="description" />
    <title>{title}</title>
  </Head>
);

export default Metadata;
