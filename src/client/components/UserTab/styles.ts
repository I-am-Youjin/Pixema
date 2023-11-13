import styled from "styled-components";

export const StyledWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 264px;
  height: 56px;
  flex-shrink: 0;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
`;

export const StyledUserIcon = styled("div")`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Exo 2";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${(prop) => prop.theme.palette.secondary.white};
  background-color: ${(prop) => prop.theme.palette.primary.purple};
`;

export const UserInfoConteiner = styled("div")`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserName = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
  white-space: nowrap;
`;
