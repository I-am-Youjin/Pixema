import styled from "styled-components";

export const StyledInput = styled("input")`
  height: 56px;
  width: 100%;
  padding: 20px 16px;
  border-radius: 10px;
  border: 2px solid ${(prop) => prop.theme.palette.secondary.graphite};
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  background-color: ${(prop) => prop.theme.palette.primary.inputBackground};
  outline: none;
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  &:focus {
    border: 2px solid ${(prop) => prop.theme.palette.primary.purple};
  }
`;
