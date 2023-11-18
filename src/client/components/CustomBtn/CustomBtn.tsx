import React from "react";
import { StyledBtn } from "./styles";
import { ICustomBtn } from "../../../types/types";

const CustomBtn: React.FC<ICustomBtn> = ({ onClick, title, isPurple }) => {
  return (
    <StyledBtn $isPurple={isPurple} onClick={onClick}>
      {title}
    </StyledBtn>
  );
};

export default CustomBtn;
