import React, { FC, ReactNode, Children } from "react";
import { StyledSection } from "./styles";

interface IMain {
  navBarIsOpen: boolean;
  children: ReactNode;
}

const Main: FC<IMain> = ({ navBarIsOpen, children }) => {
  return (
    <StyledSection $navBarisClose={navBarIsOpen}>{children}</StyledSection>
  );
};

export default Main;
