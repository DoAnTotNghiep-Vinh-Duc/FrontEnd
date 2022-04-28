import axiosClient from "./axiosClient";

const favoriteAPI = {
  getAll() {
    const url = "/favorite";
    return axiosClient.get(url);
  },
  addProductToFavorite(productId) {
    const url = "/favorite/add-favorite";
    return axiosClient.post(url, productId);
  },
  removeProductFromFavorite(productId) {
    const url = "/favorite/remove-favorite";
    return axiosClient.post(url, productId);
  },
};

export default favoriteAPI;
