import React from "react";
import {
  StyledImgWrapper,
  StyledImg,
  StyledTitle,
  CardWrapper,
} from "./styles";
import RateMarker from "./RateMarker/RateMarker";

const FilmCard = () => {
  return (
    <CardWrapper>
      <StyledImgWrapper>
        <RateMarker>4</RateMarker>
        <StyledImg src="https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg" />
      </StyledImgWrapper>
      <StyledTitle>Lorem ipsum</StyledTitle>
    </CardWrapper>
  );
};

export default FilmCard;
