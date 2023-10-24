import { type } from "os";
import { ReactNode } from "react";

export type FilmBySearch = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  rating: string;
};

// export type FilmBySearch = {
//   kinopoiskId: string;
//   imdbId: string;
//   nameRu: string;
//   nameEn: string;
//   nameOriginal: string;
//   ratingKinopoisk: string;
//   ratingImdb: string;
//   year: string;
//   type: string;
//   posterUrl: string;
//   posterUrlPreview: string;
// };

export type FilmDataBySearch = {
  filmData: FilmBySearch;
};

export type defaultStateType = Record<
  "allFilms" | "favorite" | "filmsRating",
  null | FilmBySearch[]
>;
