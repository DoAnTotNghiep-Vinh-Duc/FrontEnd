import axiosClient2 from "./axiosClient2";

const userAPI = {
  signin(tokenId) {
    const url = "/login";
    return axiosClient2.post(url, tokenId);
  },
  signInWithWebAccount(account) {
    const url = "/auth/signin";
    return axiosClient2.post(url, account);
  },
  signUpWithWebAccount(newAccount) {
    const url = "/auth/signup";
    return axiosClient2.post(url, newAccount);
  },
};

export default userAPI;
