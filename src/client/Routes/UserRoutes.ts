import { UserRoutes } from "../../types/types";
import Favorites from "../pages/Favorites/Favorites";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import Trends from "../pages/Trends/Trends";
import FullFilm from "../pages/FullFilm/FullFilm";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";

export const userRoutes: UserRoutes[] = [
  {
    id: 2,
    path: `/trends`,
    Component: Trends,
    title: "Trends",
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
  {
    id: 6,
    path: `/SignIn`,
    Component: SignInPage,
    title: "SignInPage",
  },
  {
    id: 7,
    path: `/SignUp`,
    Component: SignUpPage,
    title: "SignUpPage",
  },
  {
    id: 8,
    path: `/ResetPassword`,
    Component: ResetPasswordPage,
    title: "ResetPasswordPage",
  },
  //   {
  //     id: 228,
  //     path: "*",
  //     Component: NotFound,
  //   },
];
