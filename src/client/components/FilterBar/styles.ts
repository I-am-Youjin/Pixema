import styled from "styled-components";

export const FilterBarWrapper = styled("div")<{ $isOpened: boolean }>`
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${(prop) => (prop.$isOpened ? "visible" : "hidden")};
  background-color: ${(prop) => prop.theme.palette.secondary.opacity};
  z-index: 5;
`;

export const FilterBarBlock = styled("div")<{ $isOpened: boolean }>`
  height: 100%;
  width: ${(prop) => (prop.$isOpened ? "518px" : "0")};
  background-color: ${(prop) => prop.theme.palette.secondary.dark};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 518px) {
    width: ${(prop) => (prop.$isOpened ? "100%" : "0")};
    border-radius: 0;
  }
`;
export const ContentWrapper = styled("div")<{ $isOpened: boolean }>`
  display: ${(prop) => (prop.$isOpened ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 48px 40px;
`;

export const FilterTitleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 518px) {
    margin-bottom: 32px;
  }
`;

export const Title = styled("div")`
  color: ${(prop) => prop.theme.palette.secondary.white};
  font-family: "Exo 2";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  @media (max-width: 518px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const StylesSVG = styled("svg")`
  cursor: pointer;
`;

export const FilterParamsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const BtnsWrapper = styled("div")`
  display: flex;
  gap: 40px;
  width: 100%;
  @media (max-width: 518px) {
    flex-direction: column;
  }
`;
export const CustomBtn = styled("button")<{ $isAccept: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 10px;
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
  background-color: ${(prop) =>
    prop.$isAccept
      ? prop.theme.palette.primary.purple
      : prop.theme.palette.secondary.graphite};
  &:hover {
    background-color: ${(prop) =>
      prop.$isAccept
        ? prop.theme.palette.primary.purpleHover
        : prop.theme.palette.secondary.graphite};
    color: ${(prop) =>
      prop.$isAccept
        ? prop.theme.palette.secondary.white
        : prop.theme.palette.primary.contextual};
  }
`;
