import { Dispatch } from "redux";
import { filmsActions } from "./filmsActions";
import { filmsApi } from "../../client/api/filmsApi";
import { isFetchingActions } from "./isFetchingAction";

const getFilms = async (params?: any) => {
  return await filmsApi.getAllFilms(params);
};

const getFilmsRating = async () => {
  return await filmsApi.getFilmsRating();
};

const getFilmById = async (params: any) => {
  return await filmsApi.getFilm(params);
};

export const getFilmsRatingAsync = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await getFilmsRating();
    dispatch(filmsActions.setFilmsRating(data));
  };
};

export const getFilmsAsync = (params?: any) => {
  return async (dispatch: Dispatch) => {
    const { data } = await getFilms(params);
    dispatch(filmsActions.setFilms(data));
    dispatch(isFetchingActions.isFetching(false));
  };
};
export const getFilmByIdAsync = (params: any) => {
  return async (dispatch: Dispatch) => {
    const { data } = await getFilmById(params);
    dispatch(filmsActions.getFilm(data));
  };
};
