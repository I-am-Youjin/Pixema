import styled from "styled-components";

export const CardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 266px;

  @media (max-width: 1280px) {
    width: 208px;
  }
  @media (max-width: 320px) {
    width: 272px;
  }
`;

export const StyledImg = styled("img")`
  width: 100%;
  height: 100%;
`;

export const StyledImgWrapper = styled("div")`
  position: relative;
  height: 357px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 24px;

  @media (max-width: 1280px) {
    height: 279px;
  }
  @media (max-width: 320px) {
    height: 365px;
    margin-bottom: 20px;
  }
`;

export const StyledTitle = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${(prop) => prop.theme.palette.primary.purpleHover};
  }
  &:hover::after {
  }
  &:active {
    color: ${(prop) => prop.theme.palette.primary.purple};
  }
`;

// export const TextConteiner = styled("div")`
//   max-height: 24px;
// `;
