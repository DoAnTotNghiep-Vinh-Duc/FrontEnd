import axios from "axios";

const axiosClient2 = axios.create({
  baseURL: "http://localhost:5000/",
  credentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("ERROR REPONSE:", error.response);
    return Promise.reject(error);
  }
);

export default axiosClient2;
