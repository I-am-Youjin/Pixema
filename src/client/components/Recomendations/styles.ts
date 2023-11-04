import styled from "styled-components";

export const ComponentWrapper = styled("div")`
  width: 100%;
`;

export const Title = styled("p")`
  font-family: "Exo 2";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: ${(prop: any) => prop.theme.palette.primary.contrastText};
  @media (max-width: 680px) {
    font-size: 20px;
  }
`;

export const StyledTitleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 610px) {
    margin-bottom: 32px;
  }
`;

export const StyledFilmsWrapper = styled("ul")`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 40px;
  list-style: none;

  @media (max-width: 1280px) {
    gap: 32px;
  }

  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const StyledCarouselButton = styled("button")`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  & path {
    fill: ${(prop) => prop.theme.palette.secondary.white};
  }
  &:disabled {
    cursor: default;
    & path {
      fill: ${(prop) => prop.theme.palette.secondary.graphite};
    }
  }
`;
export const ButtonWrapper = styled("div")`
  display: flex;
  gap: 16px;
`;
