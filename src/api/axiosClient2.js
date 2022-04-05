import axios from "axios";

const axiosClient2 = axios.create({
  baseURL: "http://localhost:5000/",
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
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
  async function (response) {
    return response;
  },
  async function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosClient2;
