import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:7268",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Adding response interceptor to handle 401 Unauthorized responses
apiClient.interceptors.response.use(
  (response) => response, //return if success
  (error) => {
    if (error.response && error.response.status === 401) {
      // Dispatch a global custom event for handling unauthorized access
      window.dispatchEvent(new CustomEvent("unauthorized", {
        detail: "Login Required"
      }));
    }
    return Promise.reject(error);
  }
);

export default apiClient;
