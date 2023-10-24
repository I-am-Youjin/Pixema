import React, { PropsWithChildren } from "react";
import {
  StyledImgWrapper,
  StyledImg,
  StyledTitle,
  CardWrapper,
  // TextConteiner,
} from "./styles";
import RateMarker from "./RateMarker/RateMarker";
import { FilmDataBySearch } from "../../../types";

const FilmCard: React.FC<FilmDataBySearch> = ({ filmData }) => {
  return (
    <CardWrapper>
      <StyledImgWrapper>
        <RateMarker>{filmData.rating}</RateMarker>
        <StyledImg src={filmData.Poster} />
      </StyledImgWrapper>
      {/* <TextConteiner> */}
      <StyledTitle data-title={filmData.Title}>{filmData.Title}</StyledTitle>
      {/* </TextConteiner> */}
    </CardWrapper>
  );
};

export default FilmCard;
