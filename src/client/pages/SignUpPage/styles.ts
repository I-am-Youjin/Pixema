import styled from "styled-components";
import img from "../../../img/SignInLight.jpg";

export const PageWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 6;
  padding: 48px 62px 64px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 622px) {
    padding: 32px 24px 48px;
  }
`;

export const LogoWrapper = styled("div")`
  display: flex;
  width: 100%;

  @media (max-width: 400px) {
    justify-content: center;
  }
  @media (max-height: 700px) {
    margin-bottom: 48px;
  }
`;

export const AuthWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 574px;
  background-color: ${(prop) => prop.theme.palette.primary.authBackground};
  border-radius: 10px;

  @media (max-width: 622px) {
    width: 100%;
    padding: 24px;
  }
  @media (max-height: 700px) {
    margin-bottom: 48px;
  }
`;

export const Title = styled("div")`
  font-family: "Exo 2";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 40px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  width: 100%;
  @media (max-width: 622px) {
    margin-bottom: 32px;
  }
`;

export const InputsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 8px;

  @media (max-width: 622px) {
    gap: 20px;
  }
`;

export const BtnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
  @media (max-width: 622px) {
    gap: 24px;
    margin-top: 32px;
  }
`;

export const AfterBtnTextWrapper = styled("div")`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
`;

export const Rights = styled("p")`
  color: ${(prop) => prop.theme.palette.secondary.white};
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const ContextualText = styled("div")<{
  $size?: string;
  $isClickable?: boolean;
  $isPurple?: boolean;
}>`
  font-family: "Exo 2";
  font-size: ${(prop) => (prop.$size ? prop.$size : "14px")};
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${(prop) =>
    prop.$isPurple
      ? prop.theme.palette.primary.purple
      : prop.theme.palette.secondary.light};
  cursor: ${(prop) => (prop.$isClickable ? "pointer" : "default")};

  &:hover {
    color: ${(prop) =>
      prop.$isClickable
        ? prop.theme.palette.primary.purple
        : prop.theme.palette.secondary.light};
  }

  @media (max-width: 622px) {
    font-size: 14px;
  }
`;
