import styled from "styled-components";

export const StyledWrapper = styled("div")`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 28px;
  border-radius: 6px;
  background-color: ${(prop) => prop.theme.palette.secondary.graphite};

  & path {
    fill: ${(prop) => prop.theme.palette.primary.purple};
  }
`;
