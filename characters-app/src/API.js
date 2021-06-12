import axios from "axios";

// Front  -> Middlend -> MS1, MS2, MS3
export const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});
