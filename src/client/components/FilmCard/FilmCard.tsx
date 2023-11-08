import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledImgWrapper,
  StyledImg,
  StyledTitle,
  CardWrapper,
} from "./styles";
import RateMarker from "./RateMarker/RateMarker";
import FavoriteMarker from "./FavoriteMarker/FavoriteMarker";
import { FilmDataBySearch } from "../../../types";
import { useActions } from "../../../store/hooks/useActions";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";

const FilmCard: React.FC<FilmDataBySearch> = ({ filmData }) => {
  const navigate = useNavigate();

  const handleOpenFullFilm = () => {
    navigate(`/film/${filmData.imdbID}`);
  };
  return (
    <CardWrapper>
      <StyledImgWrapper>
        <RateMarker isAbsolute={true}>{filmData.rating}</RateMarker>
        <StyledImg src={filmData.Poster} />\
        {filmData.isFavorite ? <FavoriteMarker /> : null}
      </StyledImgWrapper>
      <StyledTitle data-title={filmData.Title} onClick={handleOpenFullFilm}>
        {filmData.Title}
      </StyledTitle>
    </CardWrapper>
  );
};

export default FilmCard;
