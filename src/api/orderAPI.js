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
  paymentPaypal(value) {
    const url = "/order/payment-paypal";
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
  cancelOrder(orderId) {
    const url = "/order/cancel-order";
    return axiosClient.post(url, { orderId });
  },
};

export default orderAPI;
