import axiosClient from "./axiosClient";

const colorAPI = {
  getAll() {
    const url = "/admin/color";
    return axiosClient.get(url);
  },
};

export default colorAPI;
