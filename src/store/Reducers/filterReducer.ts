import { baseActionTypeWithPayload } from "../Actions/types";
import { actionTypes } from "../Actions/filterActions";
import { defaultStateTypeFilter } from "../../types/types";

const defaultState: defaultStateTypeFilter = {
  sortBy: "year",
  year: "",
  type: "",
};

export const filterReducer = (
  state = defaultState,
  action: baseActionTypeWithPayload<actionTypes, any>
) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    case actionTypes.SET_YEAR_FILTER:
      return {
        ...state,
        year: action.payload,
      };
    case actionTypes.SET_TYPE_FILTER:
      return {
        ...state,
        type: action.payload,
      };
    case actionTypes.CLEAR_FILTER:
      return {
        ...state,
        year: "",
        type: "",
      };
    default:
      return state;
  }
};
