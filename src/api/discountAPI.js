import axiosClient from "./axiosClient";

const discountAPI = {
  getAll() {
    const url = "/discount";
    return axiosClient.get(url);
  },
};

export default discountAPI;
