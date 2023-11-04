import React, { ReactNode } from "react";
import { StyledHeader } from "./styles";

interface IHeader {
  navIsOpened: boolean;
  children: ReactNode;
}

const Header: React.FC<IHeader> = ({ children, navIsOpened }) => {
  return <StyledHeader $navIsOpened={navIsOpened}>{children}</StyledHeader>;
};

export default Header;
