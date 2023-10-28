import React, { FC, useEffect } from "react";
import { FilmsWrapper, StyledWrapper } from "./styles";
import Header from "../../../Layout/Header/Header";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";
import { FilmBySearch } from "../../../types";
import BtnShowMore from "../../components/BtnShowMore/BtnShowMore";

const MainPage = () => {
  const films = useTypedSelector((state) => state.films.allFilms);
  const rating = useTypedSelector((state) => state.films.filmsRating);
  const { getFilmsAsync, getFilmsRatingAsync } = useActions();
  useEffect(() => {
    if (!films) {
      getFilmsRatingAsync();
      if (rating) {
        getFilmsAsync();
      }
    }
  }, []);

  return (
    <StyledWrapper>
      <FilmsWrapper>
        {films &&
          rating &&
          films.map((film: FilmBySearch) => <FilmCard filmData={film} />)}
      </FilmsWrapper>
      <BtnShowMore />
    </StyledWrapper>
  );
};

export default MainPage;
