import styled from "styled-components";

export const StyledBar = styled("div")`
  position: sticky;
  width: 306px;
  height: calc(100vh - 104px);
  top: 40px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const StyledUl = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 40px;
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

  &:active {
    color: ${(prop) => prop.theme.palette.primary.purple};

    & path {
      fill: ${(prop) => prop.theme.palette.primary.purple};
    }
  }
`;

export const StyledRigths = styled("p")`
  position: absolute;
  bottom: 0;
  /* left: 62px; */
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
