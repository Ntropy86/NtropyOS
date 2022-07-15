import { useState } from "react";
import type { ProcessContextState, Processes } from "types/contexts/process";

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  const [processes, setProcesses] = useState(startupProcesses);

  return { processes };
};

export default useProcessContextState;
