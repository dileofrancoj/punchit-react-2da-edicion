import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8000/",
});

API.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("auth") ?? "";
  config.headers["Authorization"] = jwt;
  return config;
});
