import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default categoryApi;
