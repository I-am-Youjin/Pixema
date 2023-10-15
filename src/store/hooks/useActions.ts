import { useDispatch } from "react-redux";
import { themeActions } from "../Actions/themeActions";
import { bindActionCreators } from "redux";
// import { postsActions } from "../Actions/postsActions";
// import { getPostsAsync } from "../Actions/getPostsAsync";
// import { signUpUser } from "../Actions/signUpUser";
// import { getPostByIdAsync } from "../Actions/getPostByIdAsync";
// import { selectedPostActions } from "../Actions/selectedPostAction";
// import { loginUser, authorizeUser } from "../Actions/loginUser";
// import { logInActions } from "../Actions/loginActions";
// import { getMyPosts } from "../Actions/getPostsAsync";
// import { addPost } from "../Actions/addPost";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...themeActions,
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
