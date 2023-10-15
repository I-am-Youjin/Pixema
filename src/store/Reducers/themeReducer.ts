import { ThemeModes } from "../../styles/themes";
import { actionTypes } from "../Actions/themeActions";
import { baseActionTypeWithPayload } from "../Actions/types";

const defaultState = {
  themeMode: ThemeModes.DARK,
};

export const themeReducer = (
  state = defaultState,
  action: baseActionTypeWithPayload<actionTypes, ThemeModes>
) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        themeMode: action.payload,
      };
    default:
      return state;
  }
};
