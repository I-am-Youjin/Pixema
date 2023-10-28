import { UserRoutes } from "../../types";
import Favorites from "../pages/Favorites/Favorites";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import Trends from "../pages/Trends/Trends";
// import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import FullFilm from "../pages/FullFilm/FullFilm";

export const userRoutes: UserRoutes[] = [
  {
    id: 2,
    path: `/trends`,
    Component: Trends,
    title: "Trends",
    // strict: true,
  },
  {
    id: 3,
    path: "/favorites",
    Component: Favorites,
    title: "Favorites",
  },
  {
    id: 4,
    path: "/settings",
    Component: SettingsPage,
    title: "SettingsPage",
  },
  {
    id: 5,
    path: `/film/:imdbID`,
    Component: FullFilm,
    title: "FullFilm",
  },
  //   {
  //     id: 5,
  //     path: "/sign-up",
  //     Component: SignUpPage,
  //     title: "SignUp",
  //   },
  //   {
  //     id: 6,
  //     path: "/search",
  //     Component: SearchPage,
  //     title: "SearchPage",
  //   },
  //   {
  //     id: 7,
  //     path: `/post/add-post`,
  //     Component: AddPostPage,
  //     title: "Add post",
  //     strict: true,
  //   },
  //   {
  //     id: 99,
  //     path: "//activate/:uid/:token",
  //     Component: SuccessSignUpPage,
  //     title: "Activation",
  //   },
  //   {
  //     id: 228,
  //     path: "*",
  //     Component: NotFound,
  //   },
];
