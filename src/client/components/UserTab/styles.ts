import styled from "styled-components";

export const StyledWrapper = styled("div")<{ $isDesktop: boolean }>`
  position: relative;
  display: ${(prop) => (prop.$isDesktop ? "flex" : "none")};
  justify-content: space-between;
  width: 264px;
  height: 56px;
  flex-shrink: 0;
  align-items: center;
  margin-left: ${(prop) => (prop.$isDesktop ? "40px" : "none")};
  cursor: pointer;

  @media (max-width: 1280px) {
    display: ${(prop) => (prop.$isDesktop ? "none" : "flex")};
    max-width: 100%;
  }
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
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const UserActionsWrapper = styled("div")<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 267px;
  height: ${(prop) => (prop.$isOpen ? "112px" : "0")};
  border-radius: 10px;
  overflow: hidden;
  top: ${(prop) => (prop.$isOpen ? "80px" : "56px")};
  left: 0px;
  gap: 1px;
  background-color: ${(prop) => prop.theme.palette.secondary.graphite};

  @media (max-width: 1280px) {
    width: 100%;
  }
`;
export const UserActionBtn = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 50%;
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
  background-color: ${(prop) => prop.theme.palette.secondary.dark};
  cursor: pointer;
  &:hover {
    color: ${(prop) => prop.theme.palette.primary.purple};
  }
`;
