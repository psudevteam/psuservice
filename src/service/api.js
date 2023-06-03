import axios from "axios";

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
};

export const api = axios.create(config);
