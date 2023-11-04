import styled from "styled-components";

export const StyledSection = styled("section")<{ $navBarisClose: boolean }>`
  display: flex;
  max-height: calc(100vh - 152px);
  max-width: 1920px;
  padding: 0px 62px 64px;
  /* margin: 0 auto; */
  overflow: auto;
  transition: 0.3s;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1440px) {
    padding: 0px ${(prop) => (prop.$navBarisClose ? "0" : "128px")} 64px 128px;
  }
  @media (max-width: 1280px) {
    padding: 0px ${(prop) => (prop.$navBarisClose ? "0" : "176px")} 56px 176px;
  }
  @media (max-width: 1024px) {
    padding: 0px ${(prop) => (prop.$navBarisClose ? "0" : "48px")} 56px 48px;
  }
  @media (max-width: 768px) {
    padding: 0px ${(prop) => (prop.$navBarisClose ? "0" : "40px")} 56px 40px;
  }
  @media (max-width: 350px) {
    padding: 0px ${(prop) => (prop.$navBarisClose ? "0" : "24px")} 48px 24px;
  }
`;
