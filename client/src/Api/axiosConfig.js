import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api",
  // baseURL: "https://evangadiforum.be.birhann.com/api",
  // baseURL:" https://evangadi-forum-k32f.onrender.com/api"
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosBase;
