import styled from "styled-components";

export const StyledRadioWrapper = styled("div")`
  display: flex;
  width: 100%;
  height: 52px;
  border: 2px solid ${(prop) => prop.theme.palette.secondary.graphite};
  border-radius: 10px;
  overflow: hidden;
`;
export const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid ${(prop) => prop.theme.palette.secondary.graphite};
  padding-bottom: 32px;
  margin-bottom: 32px;

  @media (max-width: 375px) {
    padding-bottom: 24px;
    margin-bottom: 24px;
  }
`;
export const Title = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
  margin-bottom: 8px;
`;
export const CustomRadioInput = styled("input")`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
export const CustomRadioLabel = styled("label")<{ $isChecked: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  cursor: pointer;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: "Exo 2";
  color: ${(prop) =>
    prop.$isChecked
      ? prop.theme.palette.secondary.white
      : prop.theme.palette.secondary.graphite};
  background-color: ${(prop) =>
    prop.$isChecked
      ? prop.theme.palette.secondary.graphite
      : prop.theme.palette.secondary.dark};
  &:hover {
    color: ${(prop) => prop.theme.palette.secondary.white};
  }
`;
