import axios from "axios";

var header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
};

const axiosClient2 = axios.create({
  baseURL: "http://localhost:5000/",
  headers: header,
});

axiosClient2.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient2.interceptors.response.use(
  async function (reponse) {
    return reponse;
  },
  async function (error) {
    const { config, status, data } = error.response;

    if (config.url === "/auth/signin" && status === 403) {
      const error = data.error;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default axiosClient2;
