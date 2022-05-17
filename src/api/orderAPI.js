import PayPal from "../features/PayPal/PayPal";
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
  getProductForRate(orderId) {
    const url = `/rate/get-product-for-rate/${orderId}`;
    return axiosClient.get(url);
  },
  paymentPaypal() {
    const url = "/order/payment-paypal";
    return axiosClient.get(url);
  },
};

export default orderAPI;
