import styled from "styled-components";

export const StyledLogoWrapper = styled("div")`
  padding: 8px 0;
  margin-bottom: 64px;
`;

export const StyledPath = styled("path")`
  fill: ${(prop: any) => prop.theme.palette.primary.contrastText};
`;
export const StyledSvg = styled("svg")`
  width: 158px;
  height: 40px;
`;
