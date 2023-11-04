import styled from "styled-components";

export const StyledHeader = styled("header")<{ $navIsOpened: boolean }>`
  position: sticky;
  top: 0;
  display: flex;
  padding: 40px 62px 56px;
  background-color: ${(prop) => prop.theme.palette.primary.main};
  z-index: 2;
  width: 100%;

  @media (max-width: 1440px) {
    padding: 40px 128px 56px;
  }
  @media (max-width: 1280px) {
    width: ${(prop) => (prop.$navIsOpened ? "calc(100% - 248px)" : "100%")};
    padding: 56px ${(prop) => (prop.$navIsOpened ? "0" : "176px")} 56px 176px;
  }
  @media (max-width: 1024px) {
    padding: 56px ${(prop) => (prop.$navIsOpened ? "0" : "48px")} 56px 48px;
  }
  @media (max-width: 768px) {
    padding: 48px ${(prop) => (prop.$navIsOpened ? "0" : "40px")} 48px 40px;
  }
  @media (max-width: 610px) {
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 350px) {
    padding: 32px ${(prop) => (prop.$navIsOpened ? "0" : "24px")} 40px 24px;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    gap: 32px;
    width: ${(prop) => (prop.$navIsOpened ? "calc(100% - 196px)" : "100%")};
  }
`;
