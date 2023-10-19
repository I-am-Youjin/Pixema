import styled from "styled-components";

export const StyledHeader = styled("header")`
  position: sticky;
  top: 0;
  display: flex;
  padding: 40px 0 56px;
  background-color: ${(prop) => prop.theme.palette.primary.main};
  z-index: 10;

  @media (max-width: 768px) {
    padding-bottom: 48px;
  }
  @media (max-width: 320px) {
    padding-bottom: 40px;
  }
`;
