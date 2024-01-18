import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7268', // Use HTTPS as indicated in your baseURL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;