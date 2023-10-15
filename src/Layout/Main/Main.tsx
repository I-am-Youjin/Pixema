import React, { FC, ReactNode, Children } from "react";
import { StyledSection } from "./styles";

interface IMain {
  children: ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Main;
