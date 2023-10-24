import React, { useEffect } from "react";
import DesktopNavBar from "../../components/DesktopNavBar/DesktopNavBar";
import {
  StyledConteiner,
  ContentWrapper,
  FilmsWrapper,
  StyledWrapper,
} from "./styles";
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
    getFilmsRatingAsync();
    if (rating) {
      getFilmsAsync();
    }
  }, []);

  return (
    <StyledConteiner>
      <Header></Header>
      <ContentWrapper>
        <DesktopNavBar />
        <StyledWrapper>
          <FilmsWrapper>
            {films &&
              films.map((film: FilmBySearch) => <FilmCard filmData={film} />)}
          </FilmsWrapper>
          <BtnShowMore />
        </StyledWrapper>
      </ContentWrapper>
    </StyledConteiner>
  );
};

export default MainPage;
