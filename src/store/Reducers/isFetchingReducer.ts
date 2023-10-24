import { actionTypes } from "../Actions/isFetchingAction";
import { baseActionTypeWithPayload } from "../Actions/types";

export const isFetchingReducer = (
  state = false,
  action: baseActionTypeWithPayload<actionTypes, boolean>
) => {
  switch (action.type) {
    case actionTypes.START_FETCHING:
      return action.payload;
    default:
      return state;
  }
};
