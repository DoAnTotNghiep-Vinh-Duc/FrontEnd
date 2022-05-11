import axiosClient from "./axiosClient";

const orderAPI = {
  getAllOrderByAccount() {
    const url = "/order/get-order-by-account";
    return axiosClient.get(url);
  },
  getOrderByOrderId(orderId) {
    const url = `/order/get-order-by-orderId/${orderId}`;
    return axiosClient.get(url);
  },
};

export default orderAPI;