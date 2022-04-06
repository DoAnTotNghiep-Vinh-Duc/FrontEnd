import axiosClient2 from "./axiosClient2";

const userAPI = {
  signInWithWebAccount(email, password) {
    const url = "/auth/signin";
    return axiosClient2.post(url, email, password);
  },
  signUpWithWebAccount(newAccount) {
    const url = "/auth/signup";
    return axiosClient2.post(url, newAccount);
  },
};

export default userAPI;
