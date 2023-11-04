import React, { MouseEventHandler } from "react";
import { StyledBtn } from "./styles";

interface INavBarBtn {
  isOpened: boolean;
  onClick: () => void;
}

const NavBarBtn: React.FC<INavBarBtn> = ({ isOpened, onClick }) => {
  return (
    <StyledBtn $isOpened={isOpened} onClick={onClick}>
      <div />
    </StyledBtn>
  );
};

export default NavBarBtn;
