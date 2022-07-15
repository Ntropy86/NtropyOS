/* eslint-disable react/jsx-no-constructed-context-values */
import type { FC } from "react";
import { createContext, useState } from "react";
import type { ProcessContextState } from "types/contexts/process";
import processDirectory from "utils/processDirectory";

interface Props {
  children: React.ReactNode;
}

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC<Props> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  const [processes, setProcesses] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
