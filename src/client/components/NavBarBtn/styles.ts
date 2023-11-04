import styled from "styled-components";

export const StyledBtn = styled("button")<{ $isOpened: boolean }>`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  margin-left: 32px;
  border: none;
  border-radius: 10px;
  background-color: ${(prop) => prop.theme.palette.primary.purple};
  display: none;
  padding: 16px;
  /* transition: 0.3s; */
  & div {
    position: relative;
    width: ${(prop) => (prop.$isOpened ? "0" : "18px")};
    content: "";
    height: 2px;
    background-color: ${(prop) => prop.theme.palette.secondary.white};
    border-radius: 2px;
    transition: 0.3s;

    &::after {
      position: absolute;
      top: ${(prop) => (prop.$isOpened ? "0" : "8px")};
      right: calc(50% - 9px);
      width: 18px;
      content: "";
      height: 2px;
      background-color: ${(prop) => prop.theme.palette.secondary.white};
      border-radius: 2px;
      rotate: ${(prop) => (prop.$isOpened ? "45deg" : "0")};
      transform-origin: center;
      transition: 0.3s;
    }
    &::before {
      position: absolute;
      bottom: ${(prop) => (prop.$isOpened ? "0" : "8px")};
      right: calc(50% - 9px);
      width: 18px;
      content: "";
      height: 2px;
      background-color: ${(prop) => prop.theme.palette.secondary.white};
      border-radius: 2px;
      rotate: ${(prop) => (prop.$isOpened ? "-45deg" : "0")};
      transform-origin: center;
      transition: 0.3s;
    }
  }

  @media (max-width: 1280px) {
    display: flex;
  }
  @media (max-width: 580px) {
    margin: 0;
  }
`;
