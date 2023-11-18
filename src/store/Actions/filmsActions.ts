import { baseActionTypeWithPayload, baseActionType } from "./types";

export enum actionTypes {
  SET_FILMS = "SET_FILMS",
  GET_FILM = "GET_FILM",
  SHOW_MORE = "SHOW_MORE",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SET_FILMS_RATING = "SET_FILMS_RATING",
  ADD_TO_FAVORITE = "ADD_TO_FAVORITE",
  DEL_FROM_FAVORITE = "DEL_FROM_FAVORITE",
  CLEAR_FAVORITE = "CLEAR_FAVORITE",
}

interface IFilmActions {
  setFilms: (
    films: any[]
  ) => baseActionTypeWithPayload<actionTypes.SET_FILMS, any[]>;
  showMore: (
    films: any[]
  ) => baseActionTypeWithPayload<actionTypes.SHOW_MORE, any[]>;
  setSearchValue: (
    value: any
  ) => baseActionTypeWithPayload<actionTypes.SET_SEARCH_VALUE, any>;
  getFilm: (film: any) => baseActionTypeWithPayload<actionTypes.GET_FILM, any>;
  addToFavorite: (
    film: any
  ) => baseActionTypeWithPayload<actionTypes.ADD_TO_FAVORITE, any>;
  delFromFavorite: (
    film: any
  ) => baseActionTypeWithPayload<actionTypes.DEL_FROM_FAVORITE, any>;
  clearFavorite: () => baseActionType<actionTypes.CLEAR_FAVORITE>;
  setFilmsRating: (
    films: any[]
  ) => baseActionTypeWithPayload<actionTypes.SET_FILMS_RATING, any[]>;
}

export const filmsActions: IFilmActions = {
  setFilms: (films) => ({ type: actionTypes.SET_FILMS, payload: films }),
  showMore: (films) => ({ type: actionTypes.SHOW_MORE, payload: films }),
  setSearchValue: (value) => ({
    type: actionTypes.SET_SEARCH_VALUE,
    payload: value,
  }),
  getFilm: (film) => ({ type: actionTypes.GET_FILM, payload: film }),
  addToFavorite: (film) => ({
    type: actionTypes.ADD_TO_FAVORITE,
    payload: film,
  }),
  delFromFavorite: (film) => ({
    type: actionTypes.DEL_FROM_FAVORITE,
    payload: film,
  }),
  clearFavorite: () => ({
    type: actionTypes.CLEAR_FAVORITE,
  }),
  setFilmsRating: (films) => ({
    type: actionTypes.SET_FILMS_RATING,
    payload: films,
  }),
};
