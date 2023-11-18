import styled from "styled-components";

export const StyledBtn = styled("button")<{ $isPurple?: boolean }>`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${(prop) =>
    prop.$isPurple
      ? prop.theme.palette.primary.purple
      : prop.theme.palette.secondary.graphite};
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
  cursor: pointer;

  &:hover {
    color: ${(prop) =>
      prop.$isPurple
        ? prop.theme.palette.secondary.white
        : prop.theme.palette.secondary.light};
    background-color: ${(prop) =>
      prop.$isPurple
        ? prop.theme.palette.primary.purpleHover
        : prop.theme.palette.secondary.graphite};
  }
`;
