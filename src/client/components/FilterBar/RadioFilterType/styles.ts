import styled from "styled-components";

export const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
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

export const InputsWrapper = styled("div")`
  background-color: ${(prop) => prop.theme.palette.secondary.graphite};
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const StyledRadioInput = styled("input")`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
export const StyledRadioLabel = styled("label")`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  align-items: center;
  cursor: pointer;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: "Exo 2";
  color: ${(prop) => prop.theme.palette.secondary.white};
  background-color: ${(prop) => prop.theme.palette.secondary.dark};
  &:hover {
    background-color: ${(prop) => prop.theme.palette.primary.purple};
  }
`;
