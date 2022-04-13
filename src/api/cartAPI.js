import axiosClient2 from "./axiosClient2";

const cartAPI = {
  addItemToCart(accountId, productDetailId) {
    const url = "/cart/add-item";
    return axiosClient2.put(url, accountId, productDetailId);
  },
  getCartByAccountId(accountId) {
    const url = `/cart/${accountId}`;
    return axiosClient2.get(url);
  },
  increaseQuantity(accountId, productDetailId) {
    const url = "/cart/increase-quantity";
    return axiosClient2.put(url, accountId, productDetailId);
  },
  decreaseQuantity(accountId, productDetailId) {
    const url = "/cart/decrease-quantity";
    return axiosClient2.put(url, accountId, productDetailId);
  },
};

export default cartAPI;
