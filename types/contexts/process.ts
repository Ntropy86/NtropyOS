import type { ComponentType } from "react";

export type Process = {
  Component: ComponentType;
  hasWindow: boolean;
};

export type Processes = Record<string, Process>;

export type ProcessContextState = {
  processes: Processes;
};
