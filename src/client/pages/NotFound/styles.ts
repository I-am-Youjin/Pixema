import styled from "styled-components";

export const StyledWrapper = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & svg {
    width: 80%;
    height: auto;
  }
`;

export const StyledText = styled("p")`
  font-family: "Exo 2";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  @media (max-width: 520px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
