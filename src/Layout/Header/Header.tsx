import React from "react";
import SearchBar from "../../client/components/SearchBar/SearchBar";
import Logo from "../../client/components/Logo/Logo";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar></SearchBar>
    </StyledHeader>
  );
};

export default Header;
