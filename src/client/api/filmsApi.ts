import { filmsClient, mockClient } from "../utils/http";

const apiKey = "apikey=48f95ffe";

export const filmsApi = {
  getAllFilms: (params: any) =>
    filmsClient.get(`/?${apiKey}`, {
      params: { s: "man", page: 1, ...params },
    }),
  getFilm: (params: any) =>
    filmsClient.get(`/?${apiKey}`, {
      params: { ...params },
    }),
  getFilmsRating: () => mockClient.get(`/IMDBRaiting/film`),
};
