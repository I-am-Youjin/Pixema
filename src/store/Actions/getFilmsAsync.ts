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
    const respStatus = JSON.parse(data.Response.toLowerCase());

    if (respStatus) {
      dispatch(filmsActions.setFilms(data));
    }

    if (params) {
      dispatch(filmsActions.setSearchValue({ ...params, respStatus }));
    } else {
      dispatch(filmsActions.setSearchValue({ s: "man", respStatus }));
    }
  };
};
export const showMoreAsync = (params?: any) => {
  return async (dispatch: Dispatch) => {
    const { data } = await getFilms(params);
    dispatch(filmsActions.showMore(data));
    dispatch(isFetchingActions.isFetching(false));
  };
};
export const getFilmByIdAsync = (params: any) => {
  return async (dispatch: Dispatch) => {
    const { data } = await getFilmById(params);
    dispatch(filmsActions.getFilm(data));
  };
};
