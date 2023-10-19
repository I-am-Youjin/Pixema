import React from "react";
import SearchBar from "../../client/components/SearchBar/SearchBar";
import Logo from "../../client/components/Logo/Logo";
import { StyledHeader, StyledLogoHider } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoHider>
        <Logo />
      </StyledLogoHider>
      <SearchBar></SearchBar>
    </StyledHeader>
  );
};

export default Header;
