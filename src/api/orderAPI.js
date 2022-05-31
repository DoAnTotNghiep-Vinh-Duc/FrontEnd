import axiosClient from "./axiosClient";

const orderAPI = {
  getAllOrderByAccount(statusOrder) {
    const url = "/order/get-order-by-account";
    return axiosClient.get(url, {
      params: {
        statusOrder,
      },
    });
  },
  getOrderByOrderId(orderId) {
    const url = `/order/get-order-by-orderId/${orderId}`;
    return axiosClient.get(url);
  },
  getProductForRate(orderId) {
    const url = `/rate/get-product-for-rate/${orderId}`;
    return axiosClient.get(url);
  },
  paymentPaypal() {
    const url = "/order/payment-paypal";
    return axiosClient.get(url);
  },
  cancelOrder(orderId) {
    const url = "/order/cancel-order";
    return axiosClient.post(url, { orderId });
  },
};

export default orderAPI;
