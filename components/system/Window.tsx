import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Window: FC<Props> = ({ children }) => (
  <>
    <div className="bg-[gray] gi"> {children}</div>
  </>
);

export default Window;
