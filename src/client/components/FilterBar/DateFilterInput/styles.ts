import styled from "styled-components";

export const StyledLable = styled("label")`
  position: relative;
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
  margin-bottom: 88px;
`;

export const StyledInput = styled("input")`
  position: absolute;
  bottom: -64px;
  display: flex;
  height: 56px;
  width: 100%;
  padding: 20px 16px;
  border-radius: 10px;
  border: 2px solid ${(prop) => prop.theme.palette.secondary.graphite};
  background-color: ${(prop) => prop.theme.palette.secondary.graphite};
  color: ${(prop) => prop.theme.palette.secondary.white};
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
