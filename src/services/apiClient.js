import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:7268",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to attach the token
apiClient.interceptors.request.use((config) => {
  // Get the token from local storage
  const token = localStorage.getItem('token');
  // If the token exists, add it to the request's Authorization header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

export default apiClient;
