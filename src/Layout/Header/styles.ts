import styled from "styled-components";

export const StyledHeader = styled("header")`
  position: sticky;
  top: 40px;
  display: flex;
  margin-bottom: 56px;
  background-color: ${(prop) => prop.theme.palette.primary.main};

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
  @media (max-width: 320px) {
    margin-bottom: 40px;
  }
`;
export const StyledLogoHider = styled("div")`
  margin-right: 78px;
  display: none;

  @media (max-width: 1280px) {
    display: flex;
  }
`;
