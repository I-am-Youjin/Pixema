import styled from "styled-components";

export const StyledSwitchBackground = styled("div")<{ $isOff: boolean }>`
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(prop) =>
    prop.$isOff
      ? prop.theme.palette.primary.contextual
      : prop.theme.palette.primary.purple};
  &:hover {
    background-color: ${(prop) =>
      prop.$isOff
        ? prop.theme.palette.secondary.light
        : prop.theme.palette.primary.purpleHover};
  }
  &::after {
    position: absolute;
    width: 16px;
    height: 16px;
    content: "";
    border-radius: 8px;
    top: 2px;
    right: 2px;
    translate: ${(prop) => (prop.$isOff ? "-12px" : "0")};
    background-color: ${(prop) => prop.theme.palette.secondary.white};
    transition-duration: 0.3s;
  }
`;
