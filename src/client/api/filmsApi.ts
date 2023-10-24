import { filmsClient, mockClient } from "../utils/http";

const apiKey = "apikey=48f95ffe";

export const filmsApi = {
  getAllFilms: (params: any) =>
    filmsClient.get(`/?${apiKey}`, {
      params: { s: "batman", page: 1, ...params },
    }),
  getFilmsRating: () => mockClient.get(`/IMDBRaiting/film`),
};
// import { client } from "../utils/http";

// const apiKey = "8c8e1a50-6322-4135-8875-5d40a5420d86";

// export const filmsApi = {
//   getAllFilms: (params: any) =>
//     client.get(`/api/v2.2/films?`, {
//       params: { genres: 28, type: "ALL", page: 1, ...params },
//       headers: {
//         "X-API-KEY": `8c8e1a50-6322-4135-8875-5d40a5420d86`,
//       },
//     }),
// };
