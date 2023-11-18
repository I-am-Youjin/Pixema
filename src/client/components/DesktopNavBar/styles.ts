import styled from "styled-components";

export const StyledBar = styled("div")<{
  $isDesktop: boolean;
  $isOpened: boolean;
}>`
  position: ${(prop) => (prop.$isDesktop ? "sticky" : "absolute")};
  right: 0;
  top: 0;
  background-color: ${(prop) => prop.theme.palette.primary.main};
  display: ${(prop) => (prop.$isDesktop ? "flex" : "none")};
  justify-content: space-between;
  flex-direction: column;
  width: 306px;
  height: ${(prop) =>
    prop.$isDesktop ? "calc(100vh - 216px)" : "calc(100vh - 64px)"};
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 1280px) {
    position: absolute;
    right: 0;
    justify-content: flex-start;
    margin-top: 56px;
    padding-left: ${(prop) => (prop.$isOpened ? "32px" : "0")};
    padding-right: ${(prop) => (prop.$isOpened ? "32px" : "0")};
    display: ${(prop) => (prop.$isDesktop ? "none" : "flex")};
    width: ${(prop) => (prop.$isOpened ? "248px" : "0")};
  }
  @media (max-width: 1024px) {
    margin-top: 56px;
  }
  @media (max-width: 768px) {
    padding-left: ${(prop) => (prop.$isOpened ? "24px" : "0")};
  }
  @media (max-width: 320px) {
    width: ${(prop) => (prop.$isOpened ? "196px" : "0")};
  }
`;

export const StyledUl = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 40px;

  &a {
    color: ${(prop) => prop.theme.palette.primary.purple};
    fill: ${(prop) => prop.theme.palette.primary.purple};
  }

  @media (max-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const StyledLi = styled("li")`
  display: flex;
  gap: 20px;
  cursor: pointer;
  color: ${(prop) => prop.theme.palette.secondary.light};
  transition: all.5s;

  & path {
    fill: ${(prop) => prop.theme.palette.secondary.light};
    transition: all.5s;
  }

  &:hover {
    color: ${(prop) => prop.theme.palette.primary.purpleHover};

    & path {
      fill: ${(prop) => prop.theme.palette.primary.purpleHover};
    }
  }

  & a {
    display: flex;
    gap: 20px;
    text-decoration: none;
    color: ${(prop) => prop.theme.palette.secondary.light};
    transition: all.5s;

    &:hover {
      color: ${(prop) => prop.theme.palette.primary.purpleHover};
    }

    &.active {
      color: ${(prop) => prop.theme.palette.primary.purple};

      & path {
        fill: ${(prop) => prop.theme.palette.primary.purple};
      }
    }
  }
`;

export const StyledRigths = styled("p")<{ $isDesktop: boolean }>`
  display: ${(prop) => (prop.$isDesktop ? "inline" : "none")};
  /* position: sticky;
  bottom: 0px; */
  color: ${(prop) => prop.theme.palette.primary.contextual};
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledText = styled("p")`
  font-family: "Exo 2";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const CustomLink = styled("Link")`
  color: purple;
`;
