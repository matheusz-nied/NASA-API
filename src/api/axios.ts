import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.nasa.gov/planetary/",
  withCredentials: false,
  headers: {
    Accept: "applicastion/json",
    "Content-Type": "application/json",
  },
});

export default apiClient;