import React from "react";
import { StyledBar } from "./styles";
import Logo from "../Logo/Logo";

const DesktopNavBar: React.FC = () => {
  return (
    <StyledBar>
      <Logo />
    </StyledBar>
  );
};

export default DesktopNavBar;
