import axiosClient2 from "./axiosClient2";

const userAPI = {
  signin(tokenId) {
    const url = "/login";
    return axiosClient2.post(url, tokenId);
  },
};

export default userAPI;
