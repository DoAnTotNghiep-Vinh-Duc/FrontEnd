import axiosClient2 from "./axiosClient2";

const cartAPI = {
  addItemToCart(accountId, productDetailId) {
    const url = "/cart/add-item";
    return axiosClient2.put(url, accountId, productDetailId);
  },
};

export default cartAPI;
