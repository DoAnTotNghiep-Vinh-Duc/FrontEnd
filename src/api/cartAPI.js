import axiosClient from "./axiosClient";

const cartAPI = {
  addItemToCart(productDetailId) {
    const url = "/cart/add-item";
    return axiosClient.put(url, productDetailId);
  },
  getCartByAccountId(accountId) {
    const url = `/cart/${accountId}`;
    return axiosClient.get(url);
  },
  increaseQuantity(productDetailId) {
    const url = "/cart/increase-quantity";
    return axiosClient.put(url, productDetailId);
  },
  decreaseQuantity(productDetailId) {
    const url = "/cart/decrease-quantity";
    return axiosClient.put(url, productDetailId);
  },
  removeItem(productDetailId) {
    const url = "/cart/remove-item";
    return axiosClient.put(url, productDetailId);
  },
  payment(value) {
    const url = "/order";
    return axiosClient.post(url, {
      listOrderDetail: value.listOrderDetail,
      name: value.name,
      city: value.city,
      district: value.district,
      ward: value.ward,
      street: value.street,
      phone: value.phone,
    });
  },
};

export default cartAPI;
