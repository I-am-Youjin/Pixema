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
  justify-content: center;
  align-content: flex-start;
  max-width: 1490px;
  min-height: 100%;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1280px) {
    gap: 32px;
  }
`;
