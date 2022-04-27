import axiosClient from "./axiosClient";

const adminAPI = {
  statistical(typeRequest, beginDate, endDate) {
    const url = "/order/by-date";
    return axiosClient.post(url, typeRequest, beginDate, endDate);
  },
};

export default adminAPI;
