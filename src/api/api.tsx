import axios from "axios";

const baseURL = (import.meta.env.VITE_DJANGO_API as string | undefined)?.trim();

const api = axios.create({
  baseURL,
});

export default api;
