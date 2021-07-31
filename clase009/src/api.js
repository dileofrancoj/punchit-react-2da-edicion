import axios from "axios";

export const API = axios.create({
  baseUrl: "http://localhost:8000/api",
});

// request -> enviar información
// response -> recibir información
API.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("auth") ?? "";
  config.headers["Authorization"] = jwt;
  return config;
});
