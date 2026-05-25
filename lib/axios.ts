import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VITE_API_URL,
  withCredentials: true
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["x-request-id"] = crypto.randomUUID();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;