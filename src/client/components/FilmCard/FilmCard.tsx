import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledImgWrapper,
  StyledImg,
  StyledTitle,
  CardWrapper,
  // TextConteiner,
} from "./styles";
import RateMarker from "./RateMarker/RateMarker";
import { FilmDataBySearch } from "../../../types";
import { useActions } from "../../../store/hooks/useActions";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";

const FilmCard: React.FC<FilmDataBySearch> = ({ filmData }) => {
  const { getFilmByIdAsync } = useActions();
  const film = useTypedSelector((state) => state.films.receivedFilm);
  const navigate = useNavigate();

  const handleOpenFullFilm = () => {
    getFilmByIdAsync({ i: filmData.imdbID });
    navigate(`/film/${filmData.imdbID}`);
  };
  return (
    <CardWrapper>
      <StyledImgWrapper>
        <RateMarker isAbsolute={true}>{filmData.rating}</RateMarker>
        <StyledImg src={filmData.Poster} />
      </StyledImgWrapper>
      <StyledTitle data-title={filmData.Title} onClick={handleOpenFullFilm}>
        {filmData.Title}
      </StyledTitle>
    </CardWrapper>
  );
};

export default FilmCard;
