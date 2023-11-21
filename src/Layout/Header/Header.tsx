import React, { useEffect } from "react";
import { StyledHeader } from "./styles";
import { IHeader } from "../../types/types";

const Header: React.FC<IHeader> = ({ children, navIsOpened }) => {
  return <StyledHeader $navIsOpened={navIsOpened}>{children}</StyledHeader>;
};

export default Header;
