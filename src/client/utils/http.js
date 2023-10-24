import axios from "axios";

export const filmsClient = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const mockClient = axios.create({
  baseURL: "https://653790b7bb226bb85dd37042.mockapi.io",
});

// export const client = axios.create({
//   baseURL: "https://kinopoiskapiunofficial.tech",
// });
