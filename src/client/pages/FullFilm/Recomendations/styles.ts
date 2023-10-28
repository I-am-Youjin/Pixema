import styled from "styled-components";

export const ComponentWrapper = styled("div")`
  /* display: flex; */
  /* flex-direction: column; */
  /*   
  @media (max-width: 1800px) {
    width: 1064px;
  } */
  /* @media (max-width: 1740px) {
    width: 1004px;
  }
  @media (max-width: 1684px) {
    width: 944px;
  }
  @media (max-width: 1620px) {
    width: 884px;
  }
  @media (max-width: 1560px) {
    width: 824px;
  }
  @media (max-width: 1500px) {
    width: 764px;
  }
  @media (max-width: 1440px) {
    width: 664px;
  }
  @media (max-width: 1410px) {
    width: 634px;
  }
  @media (max-width: 1370px) {
    width: 604px;
  } */
`;

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
  /* display: flex;
  flex-direction: column; */
  /* gap: 40px;
  display: grid;
  grid-auto-flow: column;
  scroll-behavior: auto;
  gap: 40px;
  overflow-y: auto;
  overscroll-behavior: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  width: 65vh; */
  width: 1184px;
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
