import React, { FC, useEffect } from "react";
import { FilmsWrapper, StyledWrapper, StyledText } from "./styles";
import Header from "../../../Layout/Header/Header";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";
import { FilmBySearch } from "../../../types";
import BtnShowMore from "../../components/BtnShowMore/BtnShowMore";
import { SearchValue } from "../../../types";

const MainPage = () => {
  const films = useTypedSelector((state) => state.films.allFilms);
  const resp: SearchValue = useTypedSelector(
    (state) => state.films.searchValue?.respStatus
  );
  const rating = useTypedSelector((state) => state.films.filmsRating);

  return resp ? (
    <StyledWrapper>
      <FilmsWrapper>
        {films &&
          rating &&
          films.map((film: FilmBySearch) => <FilmCard filmData={film} />)}
      </FilmsWrapper>
      <BtnShowMore />
    </StyledWrapper>
  ) : (
    <StyledText>Ooooops... Films not found:(</StyledText>
  );
};

export default MainPage;
