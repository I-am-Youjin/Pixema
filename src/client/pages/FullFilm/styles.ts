import styled from "styled-components";

export const PageWrapper = styled("div")`
  display: flex;
  gap: 42px;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 810px) {
    gap: 32px;
  }
  @media (max-width: 610px) {
    flex-direction: column;
  }
`;
export const ContainerWithImg = styled("div")<{ $isMobile: boolean }>`
  display: ${(prop) => (prop.$isMobile ? "none" : "flex")};
  flex-shrink: 0;
  flex-direction: column;
  gap: 32px;
  width: 266px;

  @media (max-width: 810px) {
    width: 208px;
  }
  @media (max-width: 610px) {
    display: ${(prop) => (prop.$isMobile ? "flex" : "none")};
    gap: 24px;
    margin-bottom: 32px;
    width: 100%;
  }
`;

export const ContainerWithText = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 308px);
  flex-shrink: 0;

  @media (max-width: 610px) {
    max-width: 100%;
  }
`;
export const PlotContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 878px;
`;
export const GenresAndDiscriptionTypeText = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.light};
  min-width: 82px;
`;

export const Title = styled("p")`
  font-family: "Exo 2";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  margin-bottom: 24px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }

  @media (max-width: 610px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 20px;
  }
`;

export const RateMarksWrapper = styled("div")`
  position: relative;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 610px) {
    margin-bottom: 32px;
  }
`;

export const ImgWrapper = styled("div")`
  position: relative;
  display: flex;
  width: 100%;
  height: 356px;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 810px) {
    height: 278px;
  }
  @media (max-width: 610px) {
    height: auto;
  }
`;

export const StyledImg = styled("img")`
  width: 100%;
  height: 100%;
`;

export const InfoMarker = styled("div")`
  background-color: ${(prop) => prop.theme.palette.secondary.graphite};
  padding: 2px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
`;

export const MarksText = styled("div")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${(prop) => prop.theme.palette.secondary.white};
`;

export const PlotAndDiscritionText = styled("p")`
  font-family: "Exo 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  white-space: break-spaces;
  color: ${(prop) => prop.theme.palette.secondary.white};
`;

export const DiscriptionConteiner = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 56px;
  gap: 20px;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
  @media (max-width: 610px) {
    margin-top: 32px;
    margin-bottom: 40px;
    gap: 16px;
  }
`;

export const DiscriptionLine = styled("div")`
  display: flex;
  gap: 54px;
`;
