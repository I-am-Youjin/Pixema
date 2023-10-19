import styled from "styled-components";

export const GreenMarker = styled("div")`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 37px;
  border-radius: 6px;
  background-color: ${(prop) => prop.theme.palette.secondary.green};
`;
export const OrangeMarker = styled("div")`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 37px;
  border-radius: 6px;
  background-color: ${(prop) => prop.theme.palette.secondary.orange};
`;
export const YellowMarker = styled("div")`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 37px;
  border-radius: 6px;
  background-color: ${(prop) => prop.theme.palette.secondary.yellow};
`;

export const Text = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
`;
