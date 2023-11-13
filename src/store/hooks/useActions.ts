import { useDispatch } from "react-redux";
import { themeActions } from "../Actions/themeActions";
import { bindActionCreators } from "redux";
import {
  getFilmsAsync,
  getFilmsRatingAsync,
  showMoreAsync,
} from "../Actions/getFilmsAsync";
import { filmsActions } from "../Actions/filmsActions";
import { isFetchingActions } from "../Actions/isFetchingAction";
import { getFilmByIdAsync } from "../Actions/getFilmsAsync";
import { filterActions } from "../Actions/filterActions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...themeActions,
      getFilmsAsync,
      getFilmsRatingAsync,
      ...filmsActions,
      ...isFetchingActions,
      getFilmByIdAsync,
      showMoreAsync,
      ...filterActions,
      // ...postsActions,
      // getPostsAsync,
      // signUpUser,
      // getPostByIdAsync,
      // ...selectedPostActions,
      // loginUser,
      // authorizeUser,
      // logOut: logInActions.logOut,
      // getMyPosts,
      // addPost,
    },
    dispatch
  );
};
