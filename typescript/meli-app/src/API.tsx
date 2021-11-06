import axios from "axios";

const API = axios.create({
  baseURL: "https://api.mercadolibre.com/sites/MLA/",
});

export default API;
