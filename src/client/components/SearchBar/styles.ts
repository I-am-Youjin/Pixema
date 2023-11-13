import styled from "styled-components";

export const StyledInputWrapper = styled("div")<{ $isMobile: boolean }>`
  display: ${(prop) => (prop.$isMobile ? "none" : "flex")};
  width: 100%;
  position: relative;

  @media (max-width: 580px) {
    display: ${(prop) => (prop.$isMobile ? "flex" : "none")};
  }
`;

export const StyledInput = styled("input")<{
  $searchStatus: boolean;
  $isMobile: boolean;
  $navIsOpened: boolean;
}>`
  display: ${(prop) => (prop.$isMobile ? "none" : "flex")};
  height: 56px;
  width: 100%;
  padding: 20px 16px;
  border-radius: 10px;
  border: 2px solid
    ${(prop) =>
      prop.$searchStatus
        ? prop.theme.palette.secondary.graphite
        : prop.theme.palette.secondary.error};
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  background-color: ${(prop) => prop.theme.palette.primary.inputBackground};
  outline: none;
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  &:focus {
    border: 2px solid
      ${(prop) =>
        prop.$searchStatus
          ? prop.theme.palette.primary.purple
          : prop.theme.palette.secondary.error};
  }

  @media (max-width: 580px) {
    display: ${(prop) => (prop.$isMobile ? "flex" : "none")};
    width: ${(prop) => (prop.$navIsOpened ? "0" : "100%")};
    padding: ${(prop) => (prop.$navIsOpened ? "0" : "20px 16px")};
    border: ${(prop) => (prop.$navIsOpened ? "none" : "2px")};
  }
`;
