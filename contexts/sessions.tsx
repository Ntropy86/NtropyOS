/* eslint-disable react/jsx-no-constructed-context-values */
import useSessionContextState from "hooks/useSessionContextState";
import type { FC } from "react";
import { createContext } from "react";
import type { SessionContextState } from "types/contexts/session";

interface Props {
  children: React.ReactNode;
}

const SessionContext = createContext<SessionContextState>({ theme: undefined });

export const SessionProvider: FC<Props> = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
