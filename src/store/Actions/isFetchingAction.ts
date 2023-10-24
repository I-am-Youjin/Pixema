import { baseActionTypeWithPayload } from "./types";

export enum actionTypes {
  START_FETCHING = "START_FETCHING",
}

export interface IIsFetching {
  isFetching: (
    payload: boolean
  ) => baseActionTypeWithPayload<actionTypes.START_FETCHING, boolean>;
}

export const isFetchingActions: IIsFetching = {
  isFetching: (payload: boolean) => {
    return {
      type: actionTypes.START_FETCHING,
      payload,
    };
  },
};
