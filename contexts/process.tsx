/* eslint-disable react/jsx-no-constructed-context-values */
import useProcessContextState from "hooks/useProcessContextState";
import type { FC } from "react";
import { createContext } from "react";
import type { ProcessContextState } from "types/contexts/process";
import processDirectory from "utils/processDirectory";

interface Props {
  children: React.ReactNode;
}

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC<Props> = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
