import axios from "axios";

const axiosLoginInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api-auth/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosLoginInstance;
