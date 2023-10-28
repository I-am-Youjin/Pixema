import styled from "styled-components";

export const StyledWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    height: 928px;
  }

  @media (max-width: 320px) {
    height: 480px;
  }
`;

export const StyledText = styled("p")`
  text-align: center;
  font-family: "Exo 2";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  color: ${(prop) => prop.theme.palette.secondary.light};

  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const CustomSvg = styled("svg")`
  margin-bottom: 32px;
  width: 404px;
  height: 362px;

  @media (max-width: 1024px) {
    height: 298px;
    width: 336px;
  }

  @media (max-width: 400px) {
    height: 197px;
    width: 202px;
    margin-bottom: 32px;
  }
`;
