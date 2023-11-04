import styled from "styled-components";

export const StyledLogoWrapper = styled("div")<{ $navBarIsOpen: boolean }>`
  padding: 8px 0;
  display: flex;
  margin-right: 148px;
  width: 158px;
  @media (max-width: 1280px) {
    /* margin-right: ${(prop) => (prop.$navBarIsOpen ? "0" : "78px")}; */
    margin-right: 78px;
  }

  @media (max-width: 780px) {
    margin-right: ${(prop) => (prop.$navBarIsOpen ? "0" : "78px")};
    width: ${(prop) => (prop.$navBarIsOpen ? "0" : "158px")};
  }

  @media (max-width: 580px) {
    margin-right: 0;
    width: ${(prop) => (prop.$navBarIsOpen ? "0" : "158px")};
  }
`;

export const StyledPath = styled("path")`
  fill: ${(prop: any) => prop.theme.palette.primary.contrastText};
`;
export const StyledSvg = styled("svg")`
  width: 158px;
  height: 40px;
`;
