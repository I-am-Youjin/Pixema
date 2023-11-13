import { baseActionTypeWithPayload } from "../Actions/types";
import { actionTypes } from "../Actions/filmsActions";
import {
  FilmBySearch,
  defaultStateTypeFilms,
  FilmRatingData,
} from "../../types/types";

const defaultState: defaultStateTypeFilms = {
  allFilms: null,
  favorite: [],
  filmsRating: [],
  results: null,
  receivedFilm: null,
  searchValue: {
    s: "man",
    type: "",
    y: "",
    respStatus: true,
  },
};

export const filmsReducer = (
  state = defaultState,
  action: baseActionTypeWithPayload<actionTypes, any>
) => {
  switch (action.type) {
    case actionTypes.SET_FILMS:
      if (Array.isArray(action.payload.Search)) {
        return {
          ...state,
          results: action.payload.totalResults,
          allFilms: [
            ...(action.payload.Search.map((film: FilmBySearch, id: number) => ({
              ...film,
              id: id,
              isFavorite: (state.favorite as FilmBySearch[])?.find(
                (favFilm) => favFilm.imdbID === film.imdbID
              )
                ? true
                : false,
              rating: (state.filmsRating as FilmRatingData[]).find(
                (f, idx) => id === idx
              )?.rating,
            })) as FilmBySearch[]),
          ],
        };
      }
      return state;
    case actionTypes.SHOW_MORE:
      if (Array.isArray(action.payload.Search)) {
        return {
          ...state,
          results: action.payload.totalResults,
          allFilms: (state.allFilms as FilmBySearch[]).concat([
            ...(action.payload.Search.map((film: FilmBySearch, id: number) => ({
              ...film,
              id: id,
              isFavorite: false,
              rating: (state.filmsRating as FilmRatingData[]).find(
                (f, idx) => id === idx
              )?.rating,
            })) as FilmBySearch[]),
          ]),
        };
      }
      return state;
    case actionTypes.GET_FILM:
      return {
        ...state,
        receivedFilm: action.payload,
      };
    case actionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case actionTypes.SET_FILMS_RATING:
      return {
        ...state,
        allFilms: (state.allFilms as [])?.map(
          (filmData: any, dataId: number) => ({
            ...filmData,
            rating: ((action.payload as [])[dataId] as FilmRatingData)?.rating,
          })
        ),
        filmsRating: action.payload.map((film: any) => ({
          ...film,
        })),
      };
    case actionTypes.ADD_TO_FAVORITE:
      return {
        ...state,
        allFilms: (state.allFilms as any)?.map((film: FilmBySearch) => {
          if (film.imdbID === (action.payload as FilmBySearch).imdbID) {
            return { ...(action.payload as FilmBySearch), isFavorite: true };
          }
          return film;
        }),

        favorite: [
          ...(state.favorite as FilmBySearch[]),
          { ...(action.payload as FilmBySearch), isFavorite: true },
        ] as FilmBySearch[],
      };
    case actionTypes.DEL_FROM_FAVORITE:
      return {
        ...state,
        allFilms: (state.allFilms as any)?.map((film: FilmBySearch) => {
          if (film.imdbID === (action.payload as FilmBySearch).imdbID) {
            return { ...(action.payload as FilmBySearch), isFavorite: false };
          }
          return film;
        }),
        favorite: (state.favorite as FilmBySearch[])?.filter(
          (film: FilmBySearch) => film.imdbID !== action.payload.imdbID
        ),
      };
    default:
      return state;
  }
};
