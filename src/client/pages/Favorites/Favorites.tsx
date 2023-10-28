import React from "react";
import FavoritesEmptyState from "../../components/FavoritesEmptyState/FavoritesEmptyState";
import { StyledWrapper } from "./styles";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import FilmCard from "../../components/FilmCard/FilmCard";

const Favorites = () => {
  const favoriteFilms = useTypedSelector((state) => state.films.favorite);
  return (
    <StyledWrapper>
      {(favoriteFilms as []).length ? (
        (favoriteFilms as []).map((film) => <FilmCard filmData={film} />)
      ) : (
        <FavoritesEmptyState />
      )}
    </StyledWrapper>
  );
};

export default Favorites;
