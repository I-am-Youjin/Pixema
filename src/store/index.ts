import { themeReducer } from "./Reducers/themeReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { postsReducer } from "./Reducer/postsReducer";
import thunk from "redux-thunk";
import { filmsReducer } from "./Reducers/filmsReducer";
import { isFetchingReducer } from "./Reducers/isFetchingReducer";
// import { signUpReducer } from "./Reducer/signUpReduser";
// import { seletedPostReducer } from "./Reducer/selectedPostReducer";
// import { loginReducer } from "./Reducer/loginReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  films: filmsReducer,
  isFetching: isFetchingReducer,
  // signUp: signUpReducer,
  // selectedPost: seletedPostReducer,
  // session: loginReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
