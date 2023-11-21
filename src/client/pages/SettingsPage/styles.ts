import styled from "styled-components";

export const PageWrapper = styled("div")`
  width: 1186px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled("p")`
  font-family: "Exo 2";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  margin-bottom: 16px;

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const SettingsSection = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const SectionsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1186px;
`;

export const InnerWrapper = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;
  background-color: ${(prop) => prop.theme.palette.secondary.dark};
  border-radius: 10px;
`;

export const InputsWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: ${(prop) => prop.theme.palette.secondary.dark};
  border-radius: 10px;
  gap: 40px;
  @media (max-width: 768px) {
    gap: 32px;
  }
  @media (max-width: 580px) {
    flex-direction: column;
    gap: 20px;
    padding: 24px;
  }
`;

export const NewPasswordWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  @media (max-width: 580px) {
    gap: 20px;
  }
`;

export const TextWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const InnerTitle = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
`;

export const Description = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.primary.contextual};
`;

export const BtnsWrapper = styled("div")`
  display: flex;
  gap: 40px;
  margin-top: 48px;
  max-width: 572px;

  @media (max-width: 768px) {
    gap: 32px;
    max-width: 100%;
  }
  @media (max-width: 580px) {
    flex-direction: column;
    gap: 16px;
    margin-top: 40px;
  }
`;
