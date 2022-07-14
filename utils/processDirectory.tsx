import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type Process = {
  Component: ComponentType;
};

export type Processes = Record<string, Process>;

const processDirectory = {
  HelloWorld: {
    Component: dynamic(() => import("components/apps/HelloWorld"), {
      // suspense: true,
    }),
  },
};

export default processDirectory;
