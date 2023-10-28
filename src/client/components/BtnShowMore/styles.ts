import styled from "styled-components";

export const StyledBtnWrapper = styled("button")<{ isFetching: boolean }>`
  width: 160px;
  height: 40px;
  padding: 8px 24px;
  border-radius: 40px;
  border: none;
  background-color: ${(prop) => prop.theme.palette.secondary.graphite};
  display: flex;
  justify-content: ${(prop) => (prop.isFetching ? "space-between" : "center")};
  align-items: center;
  transition: 0.3s;

  @media (max-width: 320px) {
    width: 154px;
  }
`;

export const BtnText = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
  transition: 0.3s;
  &:hover {
    color: ${(prop) => prop.theme.palette.primary.contextual};
  }
`;
