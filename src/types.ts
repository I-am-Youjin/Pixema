export type FilmBySearch = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  rating: string;
};

export type FilmRatingData = {
  rating: string;
  id: string;
};

export type FilmDataBySearch = {
  filmData: FilmBySearch;
};

export type defaultStateType = Record<
  "allFilms" | "favorite" | "filmsRating" | "results" | "receivedFilm",
  null | FilmBySearch[] | FilmRatingData[]
>;

export type UserRoutes = {
  id: string | number;
  path: string;
  Component: React.FC<any>;
  componentAdditionalProps?: any;
  strict?: boolean;
  title?: string;
};
