import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBar = styled("div")`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 306px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const StyledUl = styled("ul")`
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 40px;
  top: 152px;
  margin-bottom: calc(100vh - 456px);
  &a {
    color: ${(prop) => prop.theme.palette.primary.purple};
    fill: ${(prop) => prop.theme.palette.primary.purple};
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

export const StyledRigths = styled("p")`
  position: sticky;
  bottom: 64px;
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
