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
  removeItem(accountId, productDetailId) {
    const url = "/cart/remove-item";
    return axiosClient2.put(url, accountId, productDetailId);
  },
  payment(value) {
    const url = "/order";
    return axiosClient2.post(url, {
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
