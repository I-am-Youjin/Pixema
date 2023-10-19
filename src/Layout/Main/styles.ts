import styled from "styled-components";

export const StyledSection = styled("section")`
  max-width: 1920px;
  min-height: 100vh;
  padding: 0px 62px 64px;
  margin: 0 auto;
  /* min-height: calc(100vh - 140px); */
  @media (max-width: 1440px) {
    padding: 0px 128px;
  }
  @media (max-width: 1280px) {
    padding: 0px 176px 56px;
  }
  @media (max-width: 1024px) {
    padding: 0px 48px;
  }
  @media (max-width: 768px) {
    padding: 0px 40px;
  }
  @media (max-width: 320px) {
    padding: 32px 24px 48px;
  }
`;
