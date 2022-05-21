import axiosClient from "./axiosClient";

const messageAPI = {
  getAllMessage() {
    const url = "/message";
    return axiosClient.get(url);
  },
  sendMessage(value) {
    const url = "/message";
    return axiosClient.post(url, value);
  },
};

export default messageAPI;
