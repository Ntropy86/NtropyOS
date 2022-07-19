/* eslint-disable prettier/prettier */
import { ProcessConsumer } from "contexts/process";
import type { FC } from "react";

// eslint-disable-next-line import/no-named-as-default
import Window from "./Window";

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, { Component, hasWindow }]) =>
        hasWindow ? (
          <Window key={id}>
            {" "}
            <Component />
          </Window>
        ) : (
          // eslint-disable-next-line prettier/prettier
          <Component key={id} />
        )
      )
    }
  </ProcessConsumer>
);

export default ProcessLoader;
