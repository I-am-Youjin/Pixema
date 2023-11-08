import styled from "styled-components";

export const FilmsWrapper = styled("div")`
  display: flex;
  align-content: flex-start;
  max-width: 1490px;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 64px;

  @media (max-width: 1280px) {
    gap: 32px;
    margin-bottom: 56px;
  }
  @media (max-width: 528px) {
    justify-content: center;
    margin-bottom: 56px;
  }

  @media (max-width: 320px) {
    margin-bottom: 48px;
  }
`;

export const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledText = styled("p")`
  font-family: "Exo 2";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
`;
