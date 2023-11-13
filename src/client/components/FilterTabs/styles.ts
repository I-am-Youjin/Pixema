import styled from "styled-components";

export const TabsWrapper = styled("div")`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 520px) {
    margin-bottom: 32px;
  }
`;

export const TabConteiner = styled("div")<{ $isVisible: boolean }>`
  display: flex;
  background-color: ${(prop) => prop.theme.palette.secondary.graphite};
  height: 40px;
  width: ${(prop) => (prop.$isVisible ? "auto" : "0")};
  padding: ${(prop) => (prop.$isVisible ? "8px 24px" : "0")};
  border-radius: 40px;
`;

export const StyledTitle = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
`;
