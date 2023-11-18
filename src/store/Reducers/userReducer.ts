import { baseActionTypeWithPayload } from "../Actions/types";
import { actionTypes } from "../Actions/userActions";
import { defaultStateTypeUser } from "../../types/types";

const defaultState: defaultStateTypeUser = {
  name: null,
  email: null,
  token: null,
  id: null,
};

export const userReducer = (
  state = defaultState,
  action: baseActionTypeWithPayload<actionTypes, any>
) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
      };
    case actionTypes.REMOVE_USER:
      return {
        name: null,
        email: null,
        token: null,
        id: null,
      };

    default:
      return state;
  }
};
