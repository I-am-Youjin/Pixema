import { ThemeModes } from "../../styles/themes";
import { baseActionTypeWithPayload } from "./types";

export enum actionTypes {
  TOGGLE_THEME = "TOGGLE_THEME",
}

export interface IThemeActions {
  toggleTheme: (
    themeMode: ThemeModes
  ) => baseActionTypeWithPayload<actionTypes, ThemeModes>;
}

export const themeActions: IThemeActions = {
  toggleTheme: (payload) => {
    return {
      type: actionTypes.TOGGLE_THEME,
      payload,
    };
  },
};
