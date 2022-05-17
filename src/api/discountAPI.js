import axiosClient from "./axiosClient";

const discountAPI = {
  getAll() {
    const url = "/admin/discount";
    return axiosClient.get(url);
  },
  update(value) {
    const url = "/admin/discount";
    return axiosClient.put(url, value);
  },

  addNewDiscount(value) {
    const url = "/admin/discount";
    return axiosClient.post(url, value);
  },
};

export default discountAPI;
