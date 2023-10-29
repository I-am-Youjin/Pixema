import styled from "styled-components";

export const PageWrapper = styled("div")`
  display: flex;
  gap: 42px;
`;
export const LeftContainer = styled("div")`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  height: 100%;
  width: 266px;
`;

export const RightContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ContainerWithText = styled("div")`
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
`;

export const Title = styled("p")`
  font-family: "Exo 2";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  color: ${(prop) => prop.theme.palette.primary.contrastText};
  margin-bottom: 26px;
  white-space: nowrap;
`;

export const RateMarksWrapper = styled("div")`
  position: relative;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ImgWrapper = styled("div")`
  display: flex;
  width: 100%;
  height: 356px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 32px;
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
  color: ${(prop) => prop.theme.palette.secondary.white};
`;

export const DiscriptionConteiner = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 56px;
  gap: 54px;
`;

// export const DiscriptionTypeConteiner = styled("div")`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

export const DiscriptionLine = styled("div")`
  display: flex;
  gap: 20px;
`;
