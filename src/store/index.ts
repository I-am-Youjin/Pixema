import { themeReducer } from "./Reducers/themeReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filmsReducer } from "./Reducers/filmsReducer";
import { isFetchingReducer } from "./Reducers/isFetchingReducer";
import { filterReducer } from "./Reducers/filterReducer";
import { userReducer } from "./Reducers/userReducer";
const rootReducer = combineReducers({
  theme: themeReducer,
  films: filmsReducer,
  isFetching: isFetchingReducer,
  filter: filterReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
