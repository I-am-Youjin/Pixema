import styled from "styled-components";

export const BtnWrapper = styled("div")`
  display: flex;
  width: 100%;
  height: 56px;
  border-radius: 20px;
  overflow: hidden;
  gap: 1px;
`;

export const StyledBtn = styled("button")`
  border: none;
  height: 100%;
  width: 50%;
  background-color: ${(prop) => prop.theme.palette.secondary.graphite};
  transition: 0.5s;
  & path {
    fill: ${(prop) => prop.theme.palette.secondary.light};
    stroke: ${(prop) => prop.theme.palette.secondary.light};
  }
  & circle {
    stroke: ${(prop) => prop.theme.palette.secondary.light};
  }
  &:hover {
    background-color: ${(prop) => prop.theme.palette.primary.purpleHover};
    & path {
      fill: ${(prop) => prop.theme.palette.secondary.white};
      stroke: ${(prop) => prop.theme.palette.secondary.white};
    }
    & circle {
      stroke: ${(prop) => prop.theme.palette.secondary.white};
    }
  }
`;
