import styled from "styled-components";

export const StyledLayout = styled("div")`
  background-color: ${(prop) => prop.theme.palette.primary.main};
  position: relative;
`;

export const ContentWrapper = styled("div")`
  display: flex;
`;
