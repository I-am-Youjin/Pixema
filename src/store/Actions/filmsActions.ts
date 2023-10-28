import { baseActionTypeWithPayload } from "./types";

export enum actionTypes {
  SET_FILMS = "SET_FILMS",
  GET_FILM = "GET_FILM",
  SET_FILMS_RATING = "SET_FILMS_RATING",
  ADD_TO_FAVORITE = "ADD_TO_FAVORITE",
  DEL_FROM_FAVORITE = "DEL_FROM_FAVORITE",
}

interface IPostsActions {
  setFilms: (
    films: any[]
  ) => baseActionTypeWithPayload<actionTypes.SET_FILMS, any[]>;
  getFilm: (film: any) => baseActionTypeWithPayload<actionTypes.GET_FILM, any>;
  addToFavorite: (
    film: any
  ) => baseActionTypeWithPayload<actionTypes.ADD_TO_FAVORITE, any>;
  delFromFavorite: (
    film: any
  ) => baseActionTypeWithPayload<actionTypes.DEL_FROM_FAVORITE, any>;
  setFilmsRating: (
    films: any[]
  ) => baseActionTypeWithPayload<actionTypes.SET_FILMS_RATING, any>;
}

export const filmsActions: IPostsActions = {
  setFilms: (films) => ({ type: actionTypes.SET_FILMS, payload: films }),
  getFilm: (film) => ({ type: actionTypes.GET_FILM, payload: film }),
  addToFavorite: (film) => ({
    type: actionTypes.ADD_TO_FAVORITE,
    payload: film,
  }),
  delFromFavorite: (film) => ({
    type: actionTypes.DEL_FROM_FAVORITE,
    payload: film,
  }),
  setFilmsRating: (films) => ({
    type: actionTypes.SET_FILMS_RATING,
    payload: films,
  }),
};
