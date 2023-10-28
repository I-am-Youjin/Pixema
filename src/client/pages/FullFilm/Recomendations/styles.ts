import styled from "styled-components";

export const ComponentWrapper = styled("div")`
  /* display: flex; */
  /* flex-direction: column; */

  width: 1184px;
`;

export const Title = styled("p")`
  font-family: "Exo 2";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
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

  &div {
    display: flex;
  }
`;
