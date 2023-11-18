import { baseActionTypeWithPayload, baseActionType } from "./types";

export enum actionTypes {
  SET_USER = "SET_USER",
  REMOVE_USER = "REMOVE_USER",
}

interface IUserActions {
  setUser: (value: any) => baseActionTypeWithPayload<actionTypes.SET_USER, any>;
  removeUser: () => baseActionType<actionTypes.REMOVE_USER>;
}

export const userActions: IUserActions = {
  setUser: (value: any) => ({ type: actionTypes.SET_USER, payload: value }),
  removeUser: () => ({
    type: actionTypes.REMOVE_USER,
  }),
};
