import React from "react";
import { PropsWithChildren } from "react";

const ContextualText: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default ContextualText;
