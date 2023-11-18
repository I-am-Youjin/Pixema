import styled from "styled-components";

export const StyledLabel = styled("label")`
  position: relative;
  display: flex;
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  width: 100%;
  height: 88px;
`;

export const StyledInput = styled("input")`
  position: absolute;
  width: 100%;
  height: 56px;
  bottom: 0;
  border-radius: 10px;
  background-color: ${(prop) => prop.theme.palette.primary.inputBackground};
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  border: 2px solid ${(prop) => prop.theme.palette.secondary.graphite};
  outline: none;
  padding: 16px 20px;
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:focus {
    border: 2px solid ${(prop) => prop.theme.palette.primary.purple};
  }
`;
