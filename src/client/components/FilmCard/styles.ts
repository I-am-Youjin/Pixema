import styled from "styled-components";

export const CardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledImg = styled("img")`
  width: 100%;
`;

export const StyledImgWrapper = styled("div")`
  position: relative;
  height: 357px;
  width: 266px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 24px;

  @media (max-width: 1280px) {
    height: 279px;
    width: 208px;
  }
  @media (max-width: 320px) {
    height: 365px;
    width: 272px;
    margin-bottom: 20px;
  }
`;

export const StyledTitle = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
`;
