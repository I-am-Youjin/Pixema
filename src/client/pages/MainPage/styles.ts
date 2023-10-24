import styled from "styled-components";

export const StyledConteiner = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const ContentWrapper = styled("div")`
  display: flex;
`;
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
