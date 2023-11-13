import { baseActionTypeWithPayload, baseActionType } from "./types";

export enum actionTypes {
  TOGGLE_SORT = "TOGGLE_SORT",
  SET_YEAR_FILTER = "SET_YEAR_FILTER",
  SET_TYPE_FILTER = "SET_TYPE_FILTER",
  CLEAR_FILTER = "CLEAR_FILTER",
}

interface IPostsActions {
  toggleSort: (
    value: string
  ) => baseActionTypeWithPayload<actionTypes.TOGGLE_SORT, string>;
  setYearFilter: (
    value: string
  ) => baseActionTypeWithPayload<actionTypes.SET_YEAR_FILTER, string>;
  setTypeFilter: (
    value: string
  ) => baseActionTypeWithPayload<actionTypes.SET_TYPE_FILTER, string>;
  clearFilter: () => baseActionType<actionTypes.CLEAR_FILTER>;
}

export const filterActions: IPostsActions = {
  toggleSort: (value) => ({ type: actionTypes.TOGGLE_SORT, payload: value }),
  setYearFilter: (value) => ({
    type: actionTypes.SET_YEAR_FILTER,
    payload: value,
  }),
  setTypeFilter: (value) => ({
    type: actionTypes.SET_TYPE_FILTER,
    payload: value,
  }),
  clearFilter: () => ({
    type: actionTypes.CLEAR_FILTER,
  }),
};
