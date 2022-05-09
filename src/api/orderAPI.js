import axiosClient from "./axiosClient";

const orderAPI = {
  getAllOrderByAccount() {
    const url = "/order/get-order-by-account";
    return axiosClient.get(url);
  },
};

export default orderAPI;
