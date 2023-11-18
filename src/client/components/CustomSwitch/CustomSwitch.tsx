import React, { useState } from "react";
import { StyledSwitchBackground } from "./styles";
import { ISwitch } from "../../../types/types";

const CustomSwitch: React.FC<ISwitch> = ({ onClick }) => {
  const [off, setOff] = useState(false);
  const handleClick = () => {
    onClick();
    setOff(!off);
  };
  return (
    <StyledSwitchBackground
      $isOff={off}
      onClick={handleClick}
    ></StyledSwitchBackground>
  );
};

export default CustomSwitch;
