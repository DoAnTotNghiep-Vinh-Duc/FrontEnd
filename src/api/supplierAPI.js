import axiosClient from "./axiosClient";

const supplierAPI = {
  getAll() {
    const url = "/admin/supplier";
    return axiosClient.get(url);
  },
};

export default supplierAPI;
