import axios from "axios";
import Cookies from "js-cookie";

var header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  Authorization: Cookies.get("token"),
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: header,
});

axiosClient.refreshToken = async () => {
  const refreshToken = Cookies.get("refreshToken");
  return (
    await axiosClient.post("/auth/verify-refresh-token", {
      refreshToken: refreshToken,
    })
  ).data.data;
};

axiosClient.setLocalAccessToken = async (accessToken, refreshToken) => {
  Cookies.set("token", accessToken);
  Cookies.set("refreshToken", refreshToken);
};

axiosClient.interceptors.request.use(
  function (config) {
    config.headers.authorization = Cookies.get("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  async function (reponse) {
    return reponse;
  },
  async function (error) {
    // console.log(error.response);
    const { config, status, data } = error.response;

    if (config.url === "/auth/signin" && status === 403) {
      const error = data.error;
      return Promise.reject(error);
    }
    if (config.url === "/auth/signup" && status === 409) {
      const error = data.error;
      return Promise.reject(error);
    }
    if (config.url === "/auth/change-password" && status === 403) {
      const error = data.message;
      return Promise.reject(error);
    }
    if (
      (config.url === "/auth/send-mail-forgot-password" && status === 404) ||
      (config.url === "/auth/send-mail-forgot-password" && status === 400) ||
      (config.url === "/auth/send-mail-forgot-password" && status === 403)
    ) {
      const error = data.message;
      return Promise.reject(error);
    }

    if (config.url === "/cart/add-item" && status === 400) {
      const error = data.message;
      return Promise.reject(error);
    }
    if (config.url === "/cart/increase-quantity" && status === 400) {
      const error = data.message;
      return Promise.reject(error);
    }
    if (config.url === "/cart/decrease-quantity" && status === 400) {
      const error = data.message;
      return Promise.reject(error);
    }

    if (config.url === "/order" && status === 400) {
      const error = data.message;
      return Promise.reject(error);
    }

    if (config.url === "/admin/discount" && status === 400) {
      const error = data.message;
      return Promise.reject(error);
    }
    if (config.url === "/admin/discount/:discountId" && status === 400) {
      const error = data.message;
      return Promise.reject(error);
    }

    if (config.url === "/admin/product" && status === 400) {
      const error = data.message;
      return Promise.reject(error);
    }

    if (status === 401) {
      if (data.error.message === "jwt expired") {
        console.log("Token hết hạn");

        const { accessToken, refreshToken } = await axiosClient.refreshToken();

        if (accessToken) {
          config.headers["authorization"] = accessToken;
          await axiosClient.setLocalAccessToken(accessToken, refreshToken);
          return axiosClient(config);
        }
      }
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
