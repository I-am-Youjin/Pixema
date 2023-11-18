import styled from "styled-components";

export const StyledLayout = styled("div")`
  background-color: ${(prop) => prop.theme.palette.primary.main};
  position: relative;
  height: 100vh;
  justify-content: center;
  display: flex;
`;

export const ContentWrapper = styled("div")`
  display: flex;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PermanentVisibleContent = styled("div")`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 1920px;
  margin: 0 auto;
  max-height: 100%;
  @media (max-width: 1920px) {
    width: 100vw;
  }
`;

export const DesktopHeaderContent = styled("div")`
  display: flex;
  width: 100%;

  @media (max-width: 580px) {
    justify-content: space-between;
  }
`;
