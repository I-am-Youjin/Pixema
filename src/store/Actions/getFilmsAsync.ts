import { Dispatch } from "redux";
import { filmsActions } from "./filmsActions";
import { filmsApi } from "../../client/api/filmsApi";
// import { refreshAccessToken } from "./helpers";

const getFilms = async (params?: any) => {
  return await filmsApi.getAllFilms(params);
};

const getFilmsRating = async () => {
  return await filmsApi.getFilmsRating();
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
  };
};
