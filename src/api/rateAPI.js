import axiosClient from "./axiosClient";

const rateAPI = {
  getAllProductRated() {
    const url = "/rate/get-all-rate-by-accountid";
    return axiosClient.get(url);
  },
  updateRate(value) {
    const url = "/rate";
    return axiosClient.put(url, value);
  },
};

export default rateAPI;
