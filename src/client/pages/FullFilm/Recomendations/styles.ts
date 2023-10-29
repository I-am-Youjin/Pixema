import styled from "styled-components";

export const ComponentWrapper = styled("div")``;

export const Title = styled("p")`
  font-family: "Exo 2";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: ${(prop: any) => prop.theme.palette.primary.contrastText};
`;

export const StyledTitleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
`;
export const StyledFilmsWrapper = styled("div")`
  max-width: 1184px;
  @media (max-width: 1860px) {
    width: 884px;
  }
  @media (max-width: 1600px) {
    width: 590px;
  }
  @media (max-width: 1340px) {
    width: 360px;
  }
  @media (max-width: 1280px) {
    width: 500px;
  }
  @media (max-width: 860px) {
    width: 200px;
  }
  &div {
    display: flex;
  }
`;
