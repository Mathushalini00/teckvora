import axios from "axios";

/* CMS Base URL */
export const API_BASE_URL = "https://backend.teckvora.com";

/* Public API instance (NO TOKEN) */
const API = axios.create({
  baseURL: `https://backend.teckvora.com/api`,
  withCredentials: false,
});

export default API;
