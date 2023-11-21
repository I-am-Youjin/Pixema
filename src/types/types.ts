import { MutableRefObject, ReactNode } from "react";

export type FilmBySearch = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  rating: string;
  isFavorite: boolean;
};

export type FilmRatingData = {
  rating: string;
  id?: string;
};

export type FilmDataBySearch = {
  filmData: FilmBySearch;
};

export type SearchValue = {
  s: string;
  type: string;
  y: string;
  respStatus: boolean;
};

export type defaultStateTypeFilms = Record<
  | "allFilms"
  | "favorite"
  | "filmsRating"
  | "results"
  | "receivedFilm"
  | "searchValue",
  null | FilmBySearch[] | FilmRatingData[] | SearchValue
>;
export type defaultStateTypeFilter = Record<
  "sortBy" | "year" | "type",
  null | string
>;
export type defaultStateTypeUser = Record<
  "email" | "token" | "id" | "name",
  null | string
>;

export type UserRoutes = {
  id: string | number;
  path: string;
  Component: React.FC<any>;
  componentAdditionalProps?: any;
  hiddenForLoggedInUser?: boolean;
  title?: string;
};

export interface IFilter {
  isOpened: boolean;
  onClick: () => void;
}

export interface IInput {
  inputRef: MutableRefObject<null>;
}

export interface IFilterRadioInput {
  label: string;
  value: string;
  checked: boolean;
  onClick: (event: any) => void;
}

export interface ISearchBar {
  isMobile: boolean;
  navIsOpened: boolean;
  onClick: () => void;
}

export interface IHeader {
  navIsOpened: boolean;
  children: ReactNode;
}

export interface IFilterIcon {
  onClick: () => void;
}

export interface ITab {
  title: string;
  onClick: () => void;
  visability: boolean;
}

export interface ICustomInput {
  onChange: (event: any) => void;
  lable: string;
  type: string;
  placeholder: string;
  value: string;
}

export interface ICustomBtn {
  onClick: () => void;
  title: string;
  isPurple?: boolean;
}

export interface IUserTab {
  isDesktop: boolean;
}

export type UserData = {
  username?: string;
  email: string;
  password?: string;
};
export type signUpData = {
  username: string;
  email: string;
  id: string;
};

export interface INavBar {
  isOpened: boolean;
  isDesktop: boolean;
}

export interface ISwitch {
  onClick: () => void;
}
